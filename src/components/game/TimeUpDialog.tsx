import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface TimeUpDialogProps {
  open: boolean;
  score: number;
  penalty: number;
  onNextRound: () => void;
  isLastRound: boolean;
  initialPenalty: number;
}

export function TimeUpDialog({ open, score, penalty, onNextRound, isLastRound, initialPenalty }: TimeUpDialogProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Time's Up!</AlertDialogTitle>
          <AlertDialogDescription>
            You ran out of time.
            {initialPenalty > 0 && (
              <>
                <br />
                You chose a longer time for a <span className="font-bold">-{initialPenalty} point</span> penalty.
              </>
            )}
            {penalty > 0 && (
              <>
                <br />
                You received an additional <span className="font-bold">-{penalty} point</span> penalty for not connecting all Pelanggan Tetap.
              </>
            )}
            <br />
            Your final score for this round is: <span className="font-bold">{score}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onNextRound}>
            Continue to Case Study
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}