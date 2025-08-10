import { GameBoard } from '@/components/game/GameBoard';
import { gameRounds } from '@/data/gameData';
import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';

const Game = () => {
  const [round, setRound] = useState(1);
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);

  const currentRoundData = useMemo(() => {
    return gameRounds[round as keyof typeof gameRounds] || gameRounds[1];
  }, [round]);

  const boardBg = useMemo(() => {
    return round < 3
      ? '/assets/game/background_board_green_for_round_1_and_2.png'
      : '/assets/game/background_board_green_for_round_3_and_4.png';
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
    <div
      className="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-start p-4"
      style={{ backgroundImage: "url('/assets/game/background_white.png')" }}
    >
      <header className="w-full max-w-4xl flex justify-between items-center px-4 sm:px-8 mb-4">
        <img src="/assets/game/header_icon_1.png" alt="Avatar" className="h-16 sm:h-24" />
        <img src="/assets/game/header_text.png" alt="Find the way to the customer!" className="h-12 sm:h-16" />
        <div className="flex items-center gap-2 sm:gap-4">
          <div
            className="relative w-32 h-12 sm:w-40 sm:h-14 bg-contain bg-no-repeat bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/assets/game/header_background_timer.png')" }}
          >
            <img src="/assets/game/header_icon_timer.png" alt="Timer" className="h-8 sm:h-10 mr-2" />
            <span className="text-white font-bold text-2xl sm:text-3xl">{String(timer).padStart(2, '0')}</span>
          </div>
          <div
            className="relative w-32 h-12 sm:w-40 sm:h-14 bg-contain bg-no-repeat bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/assets/game/header_background_score.png')" }}
          >
            <img src="/assets/game/header_icon_score.png" alt="Score" className="h-8 sm:h-10 mr-2" />
            <span className="text-white font-bold text-2xl sm:text-3xl">{String(score).padStart(2, '0')}</span>
          </div>
        </div>
      </header>

      <main
        className="w-full max-w-[450px] sm:max-w-[550px] bg-contain bg-no-repeat bg-center p-[5%]"
        style={{ backgroundImage: `url('${boardBg}')` }}
      >
        <GameBoard layout={currentRoundData.layout} />
      </main>

      <div className="flex gap-2 mt-4">
        <Button onClick={() => setRound(1)} disabled={round === 1}>
          R1
        </Button>
        <Button onClick={() => setRound(2)} disabled={round === 2}>
          R2
        </Button>
        <Button onClick={() => setRound(3)} disabled={round === 3}>
          R3
        </Button>
        <Button onClick={() => setRound(4)} disabled={round === 4}>
          R4
        </Button>
      </div>
    </div>
  );
};

export default Game;