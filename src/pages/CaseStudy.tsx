import { useState, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useGame } from '@/context/GameContext';
import { caseStudies, CoreValue } from '@/data/caseStudyData';
import { CaseStudyResultDialog } from '@/components/game/CaseStudyResultDialog';
import { cn } from '@/lib/utils';
import { PhaseIntro } from '@/components/game/PhaseIntro';

const CaseStudy = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalRevenue, totalSatisfaction, updateRevenue, updateSatisfaction } = useGame();

  const { round, miniGameScore } = location.state || { round: 1, miniGameScore: 0 };

  const [selectedAnswers, setSelectedAnswers] = useState<CoreValue[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({ rpChange: 0, cpChange: 0 });
  const [showPhaseIntro, setShowPhaseIntro] = useState(true);

  const currentCase = useMemo(() => caseStudies[round], [round]);

  useEffect(() => {
    if (miniGameScore > 0) {
      updateRevenue(miniGameScore);
    }
  }, []);

  const narrative = useMemo(() => {
    if (miniGameScore < 15) return currentCase.scenarios.basic.narrative;
    if (miniGameScore <= 30) return currentCase.scenarios.moderate.narrative;
    return currentCase.scenarios.detailed.narrative;
  }, [miniGameScore, currentCase]);

  const handleSelectAnswer = (answer: CoreValue) => {
    setSelectedAnswers((prev) => {
      if (prev.includes(answer)) {
        return prev.filter((a) => a !== answer);
      }
      if (prev.length < 2) {
        return [...prev, answer];
      }
      return prev;
    });
  };

  const handleSubmit = () => {
    const correct = currentCase.correctAnswers;
    const userCorrectCount = selectedAnswers.filter(a => correct.includes(a)).length;

    let rpChange = 0;
    let cpChange = 0;

    if (userCorrectCount === 2 && selectedAnswers.length === 2) {
      rpChange = currentCase.scoring.bothCorrect.rp;
      cpChange = currentCase.scoring.bothCorrect.cp;
    } else if (userCorrectCount === 1) {
      rpChange = currentCase.scoring.oneCorrect.rp;
      cpChange = currentCase.scoring.oneCorrect.cp;
    } else {
      rpChange = currentCase.scoring.bothWrong.rp;
      cpChange = currentCase.scoring.bothWrong.cp;
    }
    
    updateRevenue(rpChange);
    updateSatisfaction(cpChange);
    setResult({ rpChange, cpChange });
    setShowResult(true);
  };

  const handleContinue = () => {
    navigate('/phase-3-scoring', { state: { round: round } });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div
        className="relative bg-cover bg-no-repeat bg-center"
        style={{
          width: '470.35px',
          height: '700px',
          backgroundImage: `url('/assets/game/background_phase_2.png')`,
        }}
      >
        {showPhaseIntro ? (
          <PhaseIntro
            phaseNumber={2}
            phaseTitle="Case Study"
            roundNumber={round}
            onComplete={() => setShowPhaseIntro(false)}
          />
        ) : (
          <>
            {/* CP Score */}
            <div className="absolute flex items-center justify-center w-[20%] h-[7%]" style={{ top: '68.5px', left: '172.5px' }}>
                <span className="font-roboto text-white font-bold drop-shadow-lg" style={{ fontSize: '35.6px', lineHeight: '1' }}>{totalSatisfaction}</span>
            </div>
            {/* RP Score */}
            <div className="absolute flex items-center justify-center w-[20%] h-[7%]" style={{ top: '68.5px', left: '315px' }}>
                <span className="font-roboto text-white font-bold drop-shadow-lg" style={{ fontSize: '35.6px', lineHeight: '1' }}>{totalRevenue}</span>
            </div>

            {/* Narrative Box */}
            <div className="absolute left-6 right-6 bg-white bg-opacity-90 rounded-lg p-4 overflow-y-auto shadow-inner" style={{ top: '22.74%', height: '285px' }}>
                <p className="text-gray-800 text-lg whitespace-pre-wrap">{narrative}</p>
                <p className="text-gray-800 text-lg mt-4">Berdasarkan case study di atas, core value apa yang dilakukan oleh Kang Kredit?</p>
            </div>

            {/* Answer Options */}
            <div className="absolute left-6 right-6 grid grid-cols-2 gap-3" style={{ top: '456px' }}>
                {currentCase.options.map((option) => (
                    <Button
                        key={option}
                        onClick={() => handleSelectAnswer(option)}
                        className={cn(
                            "w-full text-lg py-5 transition-all duration-200",
                            selectedAnswers.includes(option) ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-800'
                        )}
                    >
                        {option}
                    </Button>
                ))}
                <Button
                    onClick={handleSubmit}
                    disabled={selectedAnswers.length === 0}
                    className="w-full text-xl py-5 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 col-span-2"
                >
                    Submit
                </Button>
            </div>
          </>
        )}
      </div>
      <CaseStudyResultDialog
        open={showResult}
        rpChange={result.rpChange}
        cpChange={result.cpChange}
        onContinue={handleContinue}
      />
    </div>
  );
};

export default CaseStudy;