import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';

const Phase3Scoring = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalRevenue, totalSatisfaction } = useGame();

  const { round } = location.state || { round: 1 };

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextRound = round + 1;
      if (nextRound > 4) {
        navigate('/final-score'); // Game finished, go to final score
      } else if (nextRound === 2 || nextRound === 4) {
        navigate(`/challenge/${nextRound}`);
      } else {
        navigate('/game', { state: { round: nextRound, timeLimit: 30, initialPenalty: 0 } });
      }
    }, 4000); // Display for 4 seconds

    return () => clearTimeout(timer);
  }, [navigate, round]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div
        className="relative bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center"
        style={{
          width: '470.35px',
          height: '700px',
          backgroundImage: `url('/assets/game/background_phase_2.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 animate-fade-in">
          <p className="text-white text-2xl mb-2 drop-shadow-lg">Round {round}</p>
          <h1 className="text-white text-5xl font-bold drop-shadow-lg">Phase 3</h1>
          <p className="text-white text-3xl mt-4 drop-shadow-lg">Scoring</p>

          <div className="mt-16 space-y-6 text-white text-2xl w-full px-12">
            <div className="flex items-center justify-between bg-white/10 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <img src="/assets/game/header_icon_customer_satisfaction_point.png" alt="Customer Points" className="w-12 h-12 object-contain" />
                <span>CP</span>
              </div>
              <span className="font-bold text-3xl">{totalSatisfaction} / 100</span>
            </div>
            <div className="flex items-center justify-between bg-white/10 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <img src="/assets/game/header_icon_score.png" alt="Revenue Points" className="w-12 h-12 object-contain" />
                <span>RP</span>
              </div>
              <span className="font-bold text-3xl">{totalRevenue} / 100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase3Scoring;