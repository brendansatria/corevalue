import { useState, useEffect, useCallback } from 'react';
import { TileConfig } from '@/data/gameData';
import { Tile } from './Tile';
import { getConnections } from '@/utils/tileConnections';

interface GameBoardProps {
  layout: TileConfig[][];
  onStartGame: () => void;
  gameState: 'ready' | 'playing' | 'finished';
  onScoreChange: (score: number) => void;
  onRoundComplete: (customerScore: number) => void;
}

export function GameBoard({ layout, onStartGame, gameState, onScoreChange, onRoundComplete }: GameBoardProps) {
  const [rotations, setRotations] = useState<number[]>([]);
  const [connectedTiles, setConnectedTiles] = useState<Set<number>>(new Set());
  const flatLayout = layout.flat();

  useEffect(() => {
    const initialRotations = flatLayout.map(tile => tile.initialRotation ?? 0);
    setRotations(initialRotations);
    setConnectedTiles(new Set());
  }, [layout]);

  const handleRotate = (index: number) => {
    const newRotations = [...rotations];
    newRotations[index] = (newRotations[index] + 90) % 360;
    setRotations(newRotations);
  };

  const checkForConnections = useCallback(() => {
    const rows = layout.length;
    const cols = layout[0].length;
    const startIndex = flatLayout.findIndex(tile => tile.type === 'start');

    if (startIndex === -1) {
      setConnectedTiles(new Set());
      return;
    }

    const queue: number[] = [startIndex];
    const visited = new Set<number>([startIndex]);

    while (queue.length > 0) {
      const currentIndex = queue.shift()!;
      const currentRow = Math.floor(currentIndex / cols);
      const currentCol = currentIndex % cols;
      const currentTile = flatLayout[currentIndex];
      const currentRotation = rotations[currentIndex];
      const currentConnections = getConnections(currentTile.asset!, currentRotation, currentTile.type, currentRow, currentCol);

      const neighbors = [
        { dir: 'top', r: -1, c: 0, opposite: 'bottom' },
        { dir: 'right', r: 0, c: 1, opposite: 'left' },
        { dir: 'bottom', r: 1, c: 0, opposite: 'top' },
        { dir: 'left', r: 0, c: -1, opposite: 'right' },
      ];

      for (const { dir, r, c, opposite } of neighbors) {
        if (currentConnections.includes(dir)) {
          const neighborRow = currentRow + r;
          const neighborCol = currentCol + c;
          const neighborIndex = neighborRow * cols + neighborCol;

          if (neighborRow >= 0 && neighborRow < rows && neighborCol >= 0 && neighborCol < cols && !visited.has(neighborIndex)) {
            const neighborTile = flatLayout[neighborIndex];
            if (neighborTile.type !== 'empty') {
              const neighborRotation = rotations[neighborIndex];
              const neighborConnections = getConnections(neighborTile.asset!, neighborRotation, neighborTile.type, neighborRow, neighborCol);
              if (neighborConnections.includes(opposite)) {
                visited.add(neighborIndex);
                queue.push(neighborIndex);
              }
            }
          }
        }
      }
    }
    setConnectedTiles(visited);
  }, [layout, rotations, flatLayout]);

  useEffect(() => {
    if (gameState === 'playing') {
      checkForConnections();
    }
  }, [rotations, gameState, checkForConnections]);

  useEffect(() => {
    let currentScore = 0;
    const totalCustomers = flatLayout.filter(tile => tile.type === 'customer').length;
    let connectedCustomers = 0;

    flatLayout.forEach((tile, index) => {
      if (tile.type === 'customer' && connectedTiles.has(index)) {
        currentScore += tile.points ?? 0;
        connectedCustomers++;
      }
    });

    const isComplete = gameState === 'playing' && totalCustomers > 0 && connectedCustomers === totalCustomers;

    if (isComplete) {
      onRoundComplete(currentScore);
    } else if (gameState === 'playing') {
      onScoreChange(currentScore);
    }
  }, [connectedTiles, flatLayout, onScoreChange, onRoundComplete, gameState]);

  if (!layout || rotations.length === 0) {
    return null;
  }

  const rows = layout.length;
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${layout[0].length}, 80.55px)`,
    gridTemplateRows: `repeat(${rows}, 80.55px)`,
    gap: '4px',
  };

  return (
    <div style={gridStyle}>
      {flatLayout.map((tileConfig, index) => (
        <Tile
          key={index}
          config={tileConfig}
          onStartGame={onStartGame}
          onRotate={() => handleRotate(index)}
          gameState={gameState}
          rotation={rotations[index]}
          isConnected={connectedTiles.has(index)}
        />
      ))}
    </div>
  );
}