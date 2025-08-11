import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Kang Kredit Keliling</h1>
        <p className="text-xl text-gray-600 mb-8">
          dari panci hingga daster berpita, semua ada - cuma buat pelanggan tercinta
        </p>
        <Button size="lg" onClick={() => navigate('/game-instructions')}>
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default Index;