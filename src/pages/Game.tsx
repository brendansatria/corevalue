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
        {/* Timer */}
        <div
          className="absolute w-[20%] h-[7%]"
          style={{ top: '66px', left: '160px' }}
        >
          <img src="/assets/game/header_background_timer.png" alt="" className="absolute inset-0 w-full h-full object-contain" />
          <div className="relative w-full h-full flex items-center justify-center gap-1">
            <img src="/assets/game/header_icon_timer.png" alt="Timer" className="object-contain" style={{ height: '35.6px' }} />
            <span className="font-roboto text-white font-bold" style={{ fontSize: '35.6px', lineHeight: '1' }}>
              {String(timer).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Score */}
        <div
          className="absolute w-[20%] h-[7%]"
          style={{ top: '66px', left: '301px' }}
        >
          <img src="/assets/game/header_background_score.png" alt="" className="absolute inset-0 w-full h-full object-contain" />
          <div className="relative w-full h-full flex items-center justify-center gap-1">
            <img src="/assets/game/header_icon_score.png" alt="Score" className="object-contain" style={{ height: '35.6px' }} />
            <span className="font-roboto text-white font-bold" style={{ fontSize: '35.6px', lineHeight: '1' }}>
              {String(score).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Game Board Overlay Container */}
        <div className="absolute top-[22.74%] left-[6.5%] w-[87%] h-[70%] flex justify-center">
          <GameBoard layout={currentRoundData.layout} />
        </div>
      </div>
    </div>
  );
};

export default Game;