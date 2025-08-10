import { TileConfig } from '@/data/gameData';
import { Tile } from './Tile';
import { cn } from '@/lib/utils';

interface GameBoardProps {
  layout: TileConfig[][];
}

export function GameBoard({ layout }: GameBoardProps) {
  // Add a guard clause to prevent crash if layout is not yet available.
  if (!layout) {
    return null;
  }

  const rows = layout.length;
  const gridClasses = rows === 6 ? 'grid-rows-6' : 'grid-rows-5';

  return (
    <div
      className={cn(
        'grid grid-cols-5 gap-1 w-full h-full',
        gridClasses
      )}
    >
      {layout.flat().map((tileConfig, index) => (
        <Tile key={index} config={tileConfig} />
      ))}
    </div>
  );
}