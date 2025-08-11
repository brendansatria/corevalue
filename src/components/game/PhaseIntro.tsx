import { useEffect } from 'react';

interface PhaseIntroProps {
  phaseNumber: number;
  phaseTitle: string;
  roundNumber?: number;
  onComplete: () => void;
}

export function PhaseIntro({ phaseNumber, phaseTitle, roundNumber, onComplete }: PhaseIntroProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 animate-fade-in">
      {roundNumber && <p className="text-white text-2xl mb-2 drop-shadow-lg">Round {roundNumber}</p>}
      <h1 className="text-white text-5xl font-bold drop-shadow-lg">Phase {phaseNumber}</h1>
      <p className="text-white text-3xl mt-4 drop-shadow-lg">{phaseTitle}</p>
    </div>
  );
}