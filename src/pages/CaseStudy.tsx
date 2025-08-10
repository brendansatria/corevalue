import { useState, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useGame } from '@/context/GameContext';
import { caseStudies, CoreValue } from '@/data/caseStudyData';
import { CaseStudyResultDialog } from '@/components/game/CaseStudyResultDialog';
import { CircleUserRound, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const CaseStudy = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalRevenue, totalSatisfaction, updateRevenue, updateSatisfaction } = useGame();

  const { round, miniGameScore } = location.state || { round: 1, miniGameScore: 0 };

  const [selectedAnswers, setSelectedAnswers] = useState<CoreValue[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({ rpChange: 0, cpChange: 0 });

  const currentCase = useMemo(() => caseStudies[round], [round]);

  useEffect(() => {
    // Add mini-game score to total revenue when component mounts for the round
    if (miniGameScore > 0) {
      updateRevenue(miniGameScore);
    }
  }, []); // Runs only once when the page loads for the case study

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
    const nextRound = round + 1;
    if (nextRound > 4) {
      navigate('/'); // Game finished, go to home
    } else if (nextRound === 2 || nextRound === 4) {
      navigate(`/challenge/${nextRound}`);
    } else {
      navigate('/game', { state: { round: nextRound, timeLimit: 30, initialPenalty: 0 } });
    }
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
        {/* Header */}
        <div className="absolute top-[20px] left-0 right-0 px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <CircleUserRound size={60} className="text-gray-700 bg-orange-200 rounded-full p-1" />
                <div className="bg-white rounded-lg px-4 py-2 shadow-md">
                    <p className="font-bold text-gray-800">Pilih 2 jawaban yang tepat!</p>
                </div>
            </div>
        </div>
        <div className="absolute top-[95px] left-0 right-0 px-6 flex items-center justify-end gap-4">
            {/* CP Score */}
            <div className="flex items-center gap-2 bg-gray-800 bg-opacity-70 rounded-full px-3 py-1">
                <Heart size={24} className="text-red-400" />
                <span className="font-roboto text-white font-bold text-xl">{totalSatisfaction}</span>
            </div>
            {/* RP Score */}
            <div className="flex items-center gap-2 bg-gray-800 bg-opacity-70 rounded-full px-3 py-1">
                <img src="/assets/game/header_icon_score.png" alt="RP" className="h-6" />
                <span className="font-roboto text-white font-bold text-xl">{totalRevenue}</span>
            </div>
        </div>

        {/* Narrative Box */}
        <div className="absolute top-[160px] left-6 right-6 h-[300px] bg-white bg-opacity-90 rounded-lg p-4 overflow-y-auto shadow-inner">
            <p className="text-gray-800 text-lg whitespace-pre-wrap">{narrative}</p>
        </div>

        {/* Answer Options */}
        <div className="absolute bottom-[40px] left-6 right-6 flex flex-col gap-3">
            {currentCase.options.map((option) => (
                <Button
                    key={option}
                    onClick={() => handleSelectAnswer(option)}
                    className={cn(
                        "w-full text-lg py-6 transition-all duration-200",
                        selectedAnswers.includes(option) ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-800'
                    )}
                >
                    {option}
                </Button>
            ))}
            <Button
                onClick={handleSubmit}
                disabled={selectedAnswers.length === 0}
                className="w-full text-xl py-7 mt-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400"
            >
                Submit
            </Button>
        </div>
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