import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";

const HowToPlay = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">How to Play</h1>
        <div className="text-left text-lg text-gray-700 space-y-4">
          <p>
            Your goal is to connect the starting point to as many customers as possible by rotating the path tiles.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 mb-6">
            <li>Click on the path tiles to rotate them 90 degrees clockwise.</li>
            <li>Create a continuous path from the start tile to the customer tiles.</li>
            <li>Each connected customer will increase your score.</li>
            <li>You have a limited time for each round, so be quick!</li>
            <li>Connect all customers before time runs out for a <span className="font-bold text-green-600">+10 point</span> bonus!</li>
            <li>If the timer runs out, you'll get a <span className="font-bold text-red-600">-5 point</span> penalty for each Pelanggan Tetap you missed.</li>
          </ul>

          <div className="pt-6 border-t">
            <h2 className="text-2xl font-bold text-center mb-4">Tile Examples</h2>
            <div className="flex justify-around items-start text-center gap-4">
              <div className="flex flex-col items-center w-1/3">
                <img src="/assets/game/start_tile.png" alt="Start Tile" className="w-20 h-20 object-contain mb-2" />
                <p className="text-base font-semibold">Start Tile</p>
                <p className="text-sm text-gray-600">Where the path begins.</p>
              </div>
              <div className="flex flex-col items-center w-1/3">
                <img src="/assets/game/L_path_tile.png" alt="Path Tile" className="w-20 h-20 object-contain mb-2" />
                <p className="text-base font-semibold">Path Tile</p>
                <p className="text-sm text-gray-600">Rotate to build paths.</p>
              </div>
              <div className="flex flex-col items-center w-1/3">
                <img src="/assets/game/pelanggan_tetap_10RP_tile.png" alt="Customer Tile" className="w-20 h-20 object-contain mb-2" />
                <p className="text-base font-semibold">Customer Tile</p>
                <p className="text-sm text-gray-600">Connect to score points.</p>
              </div>
            </div>
          </div>

          <p className="font-bold text-center pt-8">Good luck!</p>
        </div>
        <div className="mt-8">
          <Button size="lg" onClick={() => navigate('/game')}>
            Next
          </Button>
        </div>
      </div>
      <div className="absolute bottom-4">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default HowToPlay;