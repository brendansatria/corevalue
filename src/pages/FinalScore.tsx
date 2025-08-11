import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useGame } from "@/context/GameContext";
import { useNavigate } from "react-router-dom";

const FinalScore = () => {
  const navigate = useNavigate();
  const { totalRevenue, totalSatisfaction, resetScores } = useGame();

  const RP_TARGET = 100;
  const CP_TARGET = 100;

  const rpAchieved = totalRevenue >= RP_TARGET;
  const cpAchieved = totalSatisfaction >= CP_TARGET;
  const allTargetsAchieved = rpAchieved && cpAchieved;

  const handlePlayAgain = () => {
    resetScores();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">
            {allTargetsAchieved ? "Congratulations!" : "Game Over"}
          </CardTitle>
          <CardDescription className="text-xl pt-2">
            {allTargetsAchieved
              ? "You have successfully achieved the targets!"
              : "You didn't quite reach the targets. Better luck next time!"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-semibold">Final Score</h2>
          <div className="flex justify-around text-lg">
            <div className={`p-4 rounded-lg ${rpAchieved ? 'bg-green-100' : 'bg-red-100'}`}>
              <p className="font-bold">Revenue Points (RP)</p>
              <p className={`text-3xl font-bold ${rpAchieved ? 'text-green-700' : 'text-red-700'}`}>
                {totalRevenue} / {RP_TARGET}
              </p>
            </div>
            <div className={`p-4 rounded-lg ${cpAchieved ? 'bg-green-100' : 'bg-red-100'}`}>
              <p className="font-bold">Customer Points (CP)</p>
              <p className={`text-3xl font-bold ${cpAchieved ? 'text-green-700' : 'text-red-700'}`}>
                {totalSatisfaction} / {CP_TARGET}
              </p>
            </div>
          </div>
        </CardContent>
        <div className="p-6">
          <Button size="lg" onClick={handlePlayAgain}>
            Play Again
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FinalScore;