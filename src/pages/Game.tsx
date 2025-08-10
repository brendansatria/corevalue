import { GameBoard } from '@/components/game/GameBoard';
import { gameRounds } from '@/data/gameData';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { RoundCompleteDialog } from '@/components/game/RoundCompleteDialog';
import { TimeUpDialog } from '@/components/game/TimeUpDialog';

const Game = () => {
  const [round, setRound] = useState(1);
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [isRoundComplete, setIsRoundComplete] = useState(false);
  const [bonusAwarded, setBonusAwarded] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [penalty, setPenalty] = useState(0);
  const [connectedTiles, setConnectedTiles] = useState<Set<number>>(new Set());

  const currentRoundData = useMemo(() => {
    return gameRounds[round as keyof typeof gameRounds] || gameRounds[1];
  }, [round]);

  const gameBg = useMemo(() => {
    return round < 3
      ? '/assets/game/background_1_for_round_1_and_2.png'
      : '/assets/game/background_2_for_round_3_and_4.png';
  }, [round]);

  const startGame = () => {
    if (gameState === 'ready') {
      setGameState('playing');
    }
  };

  const handleScoreChange = useCallback((newScore: number) => {
    setScore(newScore);
  }, []);

  const handleRoundComplete = useCallback((customerScore: number) => {
    if (gameState === 'playing') {
      setGameState('finished');
      setIsRoundComplete(true);
      setScore(customerScore + 10);
      setBonusAwarded(true);
    }
  }, [gameState]);

  const handleNextRound = () => {
    if (round < 4) {
      setRound(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev > 1) {
          return prev - 1;
        }
        setGameState('finished');
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [gameState]);

  useEffect(() => {
    if (gameState === 'finished' && !isRoundComplete) {
      const flatLayout = currentRoundData.layout.flat();
      let calculatedPenalty = 0;
      flatLayout.forEach((tile, index) => {
        if (tile.type === 'customer' && (tile.points ?? 0) > 5) {
          if (!connectedTiles.has(index)) {
            calculatedPenalty += 5;
          }
        }
      });

      if (calculatedPenalty > 0) {
        setScore(prev => Math.max(0, prev - calculatedPenalty));
        setPenalty(calculatedPenalty);
      }
      setIsTimeUp(true);
    }
  }, [gameState, isRoundComplete, connectedTiles, currentRoundData.layout]);

  useEffect(() => {
    setTimer(30);
    setScore(0);
    setGameState('ready');
    setIsRoundComplete(false);
    setBonusAwarded(false);
    setIsTimeUp(false);
    setPenalty(0);
    setConnectedTiles(new Set());
  }, [round]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div
        className="relative bg-contain bg-no-repeat bg-center"
        style={{
          width: '470.35px',
          height: '700px',
          backgroundImage: `url('${gameBg}')`,
        }}
      >
        {/* Timer */}
        <div
          className="absolute w-[20%] h-[7%]"
          style={{ top: '68.5px', left: '160px' }}
        >
          <img src="/assets/game/header_background_timer.png" alt="" className="absolute inset-0 w-full h-full object-contain" />
          <div className="relative w-full h-full flex items-center justify-center gap-1">
            <img src="/assets/game/header_icon_timer.png" alt="Timer" className="object-contain" style={{ height: '35.6px' }} />
            <span className="font-roboto text-white font-bold" style={{ fontSize: '35.6px', lineHeight: '1' }}>
              {String(timer).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Score */}
        <div
          className="absolute w-[20%] h-[7%]"
          style={{ top: '68.5px', left: '301px' }}
        >
          <img src="/assets/game/header_background_score.png" alt="" className="absolute inset-0 w-full h-full object-contain" />
          <div className="relative w-full h-full flex items-center justify-center gap-1">
            <img src="/assets/game/header_icon_score.png" alt="Score" className="object-contain" style={{ height: '35.6px' }} />
            <span className="font-roboto text-white font-bold" style={{ fontSize: '35.6px', lineHeight: '1' }}>
              {String(score).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Game Board Overlay Container */}
        <div className="absolute top-[22.74%] left-[6.5%] w-[87%] h-[70%] flex justify-center">
          <GameBoard
            layout={currentRoundData.layout}
            onStartGame={startGame}
            gameState={gameState}
            onScoreChange={handleScoreChange}
            onRoundComplete={handleRoundComplete}
            connectedTiles={connectedTiles}
            onConnectedTilesChange={setConnectedTiles}
          />
        </div>
      </div>
      <RoundCompleteDialog
        open={isRoundComplete}
        score={score}
        onNextRound={handleNextRound}
        isLastRound={round === 4}
        bonusAwarded={bonusAwarded}
      />
      <TimeUpDialog
        open={isTimeUp}
        score={score}
        penalty={penalty}
        onNextRound={handleNextRound}
        isLastRound={round === 4}
      />
    </div>
  );
};

export default Game;