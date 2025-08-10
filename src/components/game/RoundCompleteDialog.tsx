import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";

interface RoundCompleteDialogProps {
  open: boolean;
  score: number;
  onNextRound: () => void;
  isLastRound: boolean;
  bonusAwarded: boolean;
}

export function RoundCompleteDialog({ open, score, onNextRound, isLastRound, bonusAwarded }: RoundCompleteDialogProps) {
  const navigate = useNavigate();

  const handleAction = () => {
    if (isLastRound) {
      navigate('/');
    } else {
      onNextRound();
    }
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{isLastRound ? "Game Finished!" : "Round Complete!"}</AlertDialogTitle>
          <AlertDialogDescription>
            You successfully connected all customers!
            {bonusAwarded && (
              <>
                <br />
                You've earned a <span className="font-bold">+10 point</span> completion bonus!
              </>
            )}
            <br />
            Your total score for this round is: <span className="font-bold">{score}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleAction}>
            {isLastRound ? "Finish Game" : "Next Round"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}