import { TileConfig } from '@/data/gameData';
import { cn } from '@/lib/utils';

interface TileProps {
  config: TileConfig;
  onStartGame: () => void;
  onRotate: () => void;
  gameState: 'ready' | 'playing' | 'finished';
  rotation: number;
  isConnected: boolean;
}

export function Tile({ config, onStartGame, onRotate, gameState, rotation, isConnected }: TileProps) {
  if (config.type === 'empty') {
    return <div />;
  }

  const isStartTile = config.type === 'start';
  const isPathTile = config.type === 'path';

  const isInteractive = (config.rotatable && isPathTile && gameState === 'playing') || (isStartTile && gameState === 'ready');

  const handleClick = () => {
    if (isStartTile && gameState === 'ready') {
      onStartGame();
    } else if (config.rotatable && isPathTile && gameState === 'playing') {
      onRotate();
    }
  };

  const imageSrc = isConnected && config.connectedAsset ? config.connectedAsset : config.asset;

  return (
    <div
      className={cn(
        'relative w-full h-full flex items-center justify-center',
        isInteractive && 'cursor-pointer'
      )}
      onClick={handleClick}
    >
      <img
        src={imageSrc}
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