import { TileConfig } from '@/data/gameData';
import { Tile } from './Tile';

interface GameBoardProps {
  layout: TileConfig[][];
}

export function GameBoard({ layout }: GameBoardProps) {
  if (!layout) {
    return null;
  }

  const rows = layout.length;
  
  // Using inline styles to create a grid with fixed-size cells
  // to match the requested tile dimensions.
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 80.55px)',
    gridTemplateRows: `repeat(${rows}, 80.55px)`,
    gap: '4px', // Corresponds to Tailwind's `gap-1`
  };

  return (
    <div style={gridStyle}>
      {layout.flat().map((tileConfig, index) => (
        <Tile key={index} config={tileConfig} />
      ))}
    </div>
  );
}