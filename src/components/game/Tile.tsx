import { useState, useEffect } from 'react';
import { TileConfig } from '@/data/gameData';
import { cn } from '@/lib/utils';

interface TileProps {
  config: TileConfig;
}

export function Tile({ config }: TileProps) {
  const [rotation, setRotation] = useState(config.initialRotation ?? 0);

  useEffect(() => {
    setRotation(config.initialRotation ?? 0);
  }, [config]);

  if (config.type === 'empty') {
    return <div />;
  }

  const isInteractive = config.rotatable && config.type === 'path';

  const handleClick = () => {
    if (isInteractive) {
      setRotation((prev) => (prev + 90) % 360);
    }
  };

  return (
    <div
      className={cn(
        'w-full h-full flex items-center justify-center',
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
    </div>
  );
}