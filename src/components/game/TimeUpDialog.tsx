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

interface TimeUpDialogProps {
  open: boolean;
  score: number;
  penalty: number;
  onNextRound: () => void;
  isLastRound: boolean;
}

export function TimeUpDialog({ open, score, penalty, onNextRound, isLastRound }: TimeUpDialogProps) {
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
          <AlertDialogTitle>Time's Up!</AlertDialogTitle>
          <AlertDialogDescription>
            You ran out of time.
            {penalty > 0 && (
              <>
                <br />
                You received a <span className="font-bold">-{penalty} point</span> penalty for not connecting all regular customers.
              </>
            )}
            <br />
            Your final score for this round is: <span className="font-bold">{score}</span>
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