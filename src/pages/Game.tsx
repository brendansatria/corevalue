import { GameBoard } from '@/components/game/GameBoard';
import { gameRounds } from '@/data/gameData';
import { useState, useEffect, useMemo } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Game = () => {
  const [round, setRound] = useState(1);
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);

  const currentRoundData = useMemo(() => {
    return gameRounds[round as keyof typeof gameRounds] || gameRounds[1];
  }, [round]);

  const gameBg = useMemo(() => {
    // NOTE: I've renamed the asset to be consistent.
    return round < 3
      ? '/assets/game/background_1_for_round_1_and_2.png'
      : '/assets/game/background_2_for_round_3_and_4.png';
  }, [round]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // When the round changes, we can reset the timer and score.
  // The round change logic will need to be implemented later.
  useEffect(() => {
    setTimer(30);
    setScore(0);
  }, [round]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="relative w-full max-w-sm">
        {/* Using aspect ratio from the reference image to prevent distortion */}
        <AspectRatio ratio={629 / 838}>
          <div
            className="absolute inset-0 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url('${gameBg}')` }}
          >
            {/* Timer Overlay */}
            <div className="absolute top-[11.5%] left-[51%] w-[20%] h-[7%] flex items-center justify-center">
              <span className="text-black font-bold text-xl sm:text-2xl">{String(timer).padStart(2, '0')}</span>
            </div>

            {/* Score Overlay */}
            <div className="absolute top-[11.5%] left-[74%] w-[20%] h-[7%] flex items-center justify-center">
              <span className="text-black font-bold text-xl sm:text-2xl">{String(score).padStart(2, '0')}</span>
            </div>

            {/* Game Board Overlay */}
            <div className="absolute top-[24%] left-[6.5%] w-[87%] h-[70%]">
              <GameBoard layout={currentRoundData.layout} />
            </div>
          </div>
        </AspectRatio>
      </div>
      {/* The round buttons have been removed as requested. */}
    </div>
  );
};

export default Game;