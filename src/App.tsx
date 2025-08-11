import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Game from "./pages/Game";
import HowToPlay from "./pages/HowToPlay";
import Challenge from "./pages/Challenge";
import CaseStudy from "./pages/CaseStudy";
import { GameProvider } from "./context/GameContext";
import GameInstructions from "./pages/GameInstructions";
import Phase1Intro from "./pages/Phase1Intro";
import Phase3Scoring from "./pages/Phase3Scoring";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GameProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/game-instructions" element={<GameInstructions />} />
            <Route path="/phase-1-intro" element={<Phase1Intro />} />
            <Route path="/how-to-play" element={<HowToPlay />} />
            <Route path="/game" element={<Game />} />
            <Route path="/challenge/:round" element={<Challenge />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/phase-3-scoring" element={<Phase3Scoring />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </GameProvider>
  </QueryClientProvider>
);

export default App;