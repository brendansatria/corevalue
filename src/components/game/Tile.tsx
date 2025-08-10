import { useState, useEffect } from 'react';
import { TileConfig } from '@/data/gameData';
import { cn } from '@/lib/utils';

interface TileProps {
  config: TileConfig;
  onStartGame: () => void;
  gameState: 'ready' | 'playing' | 'finished';
}

export function Tile({ config, onStartGame, gameState }: TileProps) {
  const [rotation, setRotation] = useState(config.initialRotation ?? 0);

  useEffect(() => {
    setRotation(config.initialRotation ?? 0);
  }, [config]);

  if (config.type === 'empty') {
    return <div />;
  }

  const isStartTile = config.type === 'start';
  const isPathTile = config.type === 'path';

  const isInteractive = (config.rotatable && isPathTile) || (isStartTile && gameState === 'ready');

  const handleClick = () => {
    if (config.rotatable && isPathTile) {
      setRotation((prev) => (prev + 90) % 360);
    } else if (isStartTile && gameState === 'ready') {
      onStartGame();
    }
  };

  return (
    <div
      className={cn(
        'relative w-full h-full flex items-center justify-center',
        isInteractive && 'cursor-pointer'
      )}
      onClick={handleClick}
    >
      <img
        src={config.asset}
        alt={config.type}
        className="w-full h-full object-contain transition-transform duration-200"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      {isStartTile && gameState === 'ready' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 rounded-md animate-pulse">
          <p className="text-white text-center font-bold text-sm drop-shadow-lg">Tap to Start</p>
        </div>
      )}
    </div>
  );
}