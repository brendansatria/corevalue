import { createContext, useContext, useState, ReactNode } from 'react';

interface GameContextState {
  totalRevenue: number;
  totalSatisfaction: number;
  updateRevenue: (amount: number) => void;
  updateSatisfaction: (amount: number) => void;
  resetScores: () => void;
}

const GameContext = createContext<GameContextState | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalSatisfaction, setTotalSatisfaction] = useState(50);

  const updateRevenue = (amount: number) => {
    setTotalRevenue(prev => prev + amount);
  };

  const updateSatisfaction = (amount: number) => {
    setTotalSatisfaction(prev => prev + amount);
  };

  const resetScores = () => {
    setTotalRevenue(0);
    setTotalSatisfaction(50);
  }

  return (
    <GameContext.Provider value={{ totalRevenue, totalSatisfaction, updateRevenue, updateSatisfaction, resetScores }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};