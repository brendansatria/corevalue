import { GameBoard } from '@/components/game/GameBoard';
import { useState, useEffect } from 'react';

const Game = () => {
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-[450px] mx-auto">
        <div
          className="relative w-full bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/assets/game/board_3x3.png')",
            paddingTop: '142%', // Aspect ratio of the background image
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
            <GameBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;