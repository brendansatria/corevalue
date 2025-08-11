import { PhaseIntro } from '@/components/game/PhaseIntro';
import { useNavigate } from 'react-router-dom';

const Phase1Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div
        className="relative bg-contain bg-no-repeat bg-center"
        style={{
          width: '470.35px',
          height: '700px',
          backgroundImage: `url('/assets/game/background_1_for_round_1_and_2.png')`,
        }}
      >
        <PhaseIntro
          phaseNumber={1}
          phaseTitle="Connecting Customers"
          onComplete={() => navigate('/how-to-play')}
        />
      </div>
    </div>
  );
};

export default Phase1Intro;