import { TileConfig } from '@/data/gameData';
import { Tile } from './Tile';

interface GameBoardProps {
  layout: TileConfig[][];
  onStartGame: () => void;
  gameState: 'ready' | 'playing' | 'finished';
}

export function GameBoard({ layout, onStartGame, gameState }: GameBoardProps) {
  if (!layout) {
    return null;
  }

  const rows = layout.length;
  
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 80.55px)',
    gridTemplateRows: `repeat(${rows}, 80.55px)`,
    gap: '4px',
  };

  return (
    <div style={gridStyle}>
      {layout.flat().map((tileConfig, index) => (
        <Tile key={index} config={tileConfig} onStartGame={onStartGame} gameState={gameState} />
      ))}
    </div>
  );
}