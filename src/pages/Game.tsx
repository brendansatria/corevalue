import { GameBoard } from '@/components/game/GameBoard';
import { gameRounds } from '@/data/gameData';
import { useState, useEffect, useMemo } from 'react';

const Game = () => {
  const [round, setRound] = useState(1);
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);

  const currentRoundData = useMemo(() => {
    return gameRounds[round as keyof typeof gameRounds] || gameRounds[1];
  }, [round]);

  const gameBg = useMemo(() => {
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

  useEffect(() => {
    setTimer(30);
    setScore(0);
  }, [round]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div
        className="relative bg-contain bg-no-repeat bg-center"
        style={{
          width: '470.35px',
          height: '700px',
          backgroundImage: `url('${gameBg}')`,
        }}
      >
        {/* Timer Overlay */}
        <div className="absolute top-[11.5%] left-[51%] w-[20%] h-[7%] flex items-center justify-center">
          <span className="text-black font-bold text-xl sm:text-2xl">{String(timer).padStart(2, '0')}</span>
        </div>

        {/* Score Overlay */}
        <div className="absolute top-[11.5%] left-[74%] w-[20%] h-[7%] flex items-center justify-center">
          <span className="text-black font-bold text-xl sm:text-2xl">{String(score).padStart(2, '0')}</span>
        </div>

        {/* Game Board Overlay Container */}
        <div className="absolute top-[22.74%] left-[6.5%] w-[87%] h-[70%] flex items-center justify-center">
          <GameBoard layout={currentRoundData.layout} />
        </div>
      </div>
    </div>
  );
};

export default Game;