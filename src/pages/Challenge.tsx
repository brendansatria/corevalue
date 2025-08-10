import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";

const challengeData = {
  '2': {
    title: "Round 2 Challenge",
    description: "There are 4 customers awaiting.",
    options: [
      { time: 30, penalty: 0 },
      { time: 35, penalty: 5 },
      { time: 40, penalty: 10 },
    ],
  },
  '4': {
    title: "Round 4 Challenge",
    description: "There are 6 customers awaiting.",
    options: [
      { time: 30, penalty: 0 },
      { time: 40, penalty: 10 },
      { time: 50, penalty: 20 },
    ],
  },
};

const Challenge = () => {
  const navigate = useNavigate();
  const { round } = useParams<{ round: '2' | '4' }>();

  if (!round || !['2', '4'].includes(round)) {
    navigate('/');
    return null;
  }

  const data = challengeData[round];

  const handleSelect = (time: number, penalty: number) => {
    navigate('/game', { state: { round: parseInt(round), timeLimit: time, initialPenalty: penalty } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-3xl">{data.title}</CardTitle>
          <CardDescription className="text-base pt-2">{data.description} Choose your time limit:</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          {data.options.map((option) => (
            <Button
              key={option.time}
              variant="outline"
              size="lg"
              onClick={() => handleSelect(option.time, option.penalty)}
              className="py-6 text-lg"
            >
              {option.time} seconds {option.penalty > 0 ? `(-${option.penalty} RP)` : '(no penalty)'}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Challenge;