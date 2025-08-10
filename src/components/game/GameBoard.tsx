import { round1Layout } from '@/data/gameData';
import { Tile } from './Tile';

export function GameBoard() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-1 w-full h-full">
      {round1Layout.flat().map((tileConfig, index) => (
        <Tile key={index} config={tileConfig} />
      ))}
    </div>
  );
}