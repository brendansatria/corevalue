import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/game/background_0.png')" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">Kang Kredit Keliling</h1>
        <p className="text-xl text-white mb-8 drop-shadow-md">
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