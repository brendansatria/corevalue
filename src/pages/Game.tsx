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

  // Reset timer and score when round changes
  useEffect(() => {
    setTimer(30);
    setScore(0);
  }, [round]);

  return (
    <div className="w-full min-h-screen bg-gray-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[450px] mx-auto">
        <div
          className="relative w-full bg-contain bg-no-repeat bg-center transition-all duration-500"
          style={{
            backgroundImage: `url('${currentRoundData.boardImage}')`,
            paddingTop: currentRoundData.boardAspectRatio,
          }}
        >
          {/* Timer */}
          <div className="absolute text-white text-4xl font-bold" style={{ top: '9.5%', left: '42%' }}>
            {String(timer).padStart(2, '0')}
          </div>
          {/* Score */}
          <div className="absolute text-white text-4xl font-bold" style={{ top: '9.5%', left: '69%' }}>
            {String(score).padStart(2, '0')}
          </div>
          {/* Game Board */}
          <div className="absolute" style={{ top: '18%', bottom: '4%', left: '6%', right: '6%' }}>
            <GameBoard layout={currentRoundData.layout} />
          </div>
        </div>
      </div>
      {/* Round switcher for testing */}
      <div className="flex gap-2 mt-4">
        <Button onClick={() => setRound(1)} disabled={round === 1}>
          Round 1
        </Button>
        <Button onClick={() => setRound(2)} disabled={round === 2}>
          Round 2
        </Button>
        <Button onClick={() => setRound(3)} disabled={round === 3}>
          Round 3
        </Button>
        <Button onClick={() => setRound(4)} disabled={round === 4}>
          Round 4
        </Button>
      </div>
    </div>
  );
};

export default Game;