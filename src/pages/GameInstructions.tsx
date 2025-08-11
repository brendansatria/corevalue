import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const GameInstructions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-3xl text-center">
        <CardHeader>
          <CardTitle className="text-4xl font-bold mb-2">Welcome to the Game!</CardTitle>
          <CardDescription className="text-xl text-gray-600">
            Your objective is to reach <span className="font-bold text-blue-600">100 Revenue Points (RP)</span> and <span className="font-bold text-green-600">100 Customer Points (CP)</span> within 4 rounds.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-left text-lg text-gray-700 space-y-6 px-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-center">Phase 1: Mini-Game (Connecting Customers)</h3>
            <p>
              Each round begins with a puzzle. You must rotate path tiles to create a continuous pipe from the starting point to all customer locations on the board. Your performance here directly impacts your RP.
            </p>
          </div>
          <div className="border-t pt-6">
            <h3 className="text-2xl font-semibold mb-2 text-center">Phase 2: Case Study (Making Decisions)</h3>
            <p>
              After the puzzle, you'll be presented with a business scenario. You need to choose two core values that best represent the actions taken. Your choices will affect both your RP and CP.
            </p>
          </div>
          <div className="border-t pt-6">
            <h3 className="text-2xl font-semibold mb-2 text-center">Phase 3: Challenge Rounds (Rounds 2 & 4)</h3>
            <p>
              Before starting rounds 2 and 4, you'll face a challenge. You can choose to have more time to solve the puzzle, but it will come at the cost of an initial RP penalty.
            </p>
          </div>
        </CardContent>
        <div className="p-6 pt-2">
          <Button size="lg" onClick={() => navigate('/how-to-play')} className="mt-4 w-full max-w-xs mx-auto">
            Continue
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default GameInstructions;