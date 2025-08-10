import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";

const HowToPlay = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">How to Play</h1>
        <div className="text-left text-lg text-gray-700 space-y-4 mb-8">
          <p>
            Your goal is to connect the starting point to as many customers as possible by rotating the path tiles.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Click on the path tiles to rotate them 90 degrees clockwise.</li>
            <li>Create a continuous path from the start tile to the customer tiles.</li>
            <li>Each connected customer will increase your score.</li>
            <li>You have a limited time for each round, so be quick!</li>
            <li>Connect all customers before time runs out for a <span className="font-bold text-green-600">+10 point</span> bonus!</li>
            <li>If the timer runs out, you'll get a <span className="font-bold text-red-600">-5 point</span> penalty for each regular customer you missed.</li>
          </ul>
          <p className="font-bold text-center pt-4">Good luck!</p>
        </div>
        <Button size="lg" onClick={() => navigate('/game')}>
          Next
        </Button>
      </div>
      <div className="absolute bottom-4">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default HowToPlay;