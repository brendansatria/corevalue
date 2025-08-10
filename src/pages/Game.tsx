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
      className="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-start p-2 sm:p-4"
      style={{ backgroundImage: "url('/assets/game/header.png')" }}
    >
      <header className="w-full max-w-2xl flex justify-between items-center mb-4">
        <img src="/assets/game/header_icon_1.png" alt="Avatar" className="h-12 sm:h-16" />
        <img src="/assets/game/header_text.png" alt="Find the way to the customer!" className="h-10 sm:h-12" />
        <div className="relative">
          <img src="/assets/game/header_timer_scoring.png" alt="Stats background" className="h-12 sm:h-16" />
          <div className="absolute inset-0 flex items-center justify-center sm:justify-around text-white font-bold text-lg sm:text-2xl">
            <div className="flex items-center gap-1 sm:gap-2">
              <img src="/assets/game/header_icon_timer.png" alt="Timer" className="h-6 sm:h-8" />
              <span>{String(timer).padStart(2, '0')}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <img src="/assets/game/header_icon_score.png" alt="Score" className="h-6 sm:h-8" />
              <span>{String(score).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full max-w-[500px] mx-auto">
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