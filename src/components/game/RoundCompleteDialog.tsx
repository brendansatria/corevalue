import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface RoundCompleteDialogProps {
  open: boolean;
  score: number;
  onNextRound: () => void;
  isLastRound: boolean;
  bonusAwarded: boolean;
  initialPenalty: number;
}

export function RoundCompleteDialog({ open, score, onNextRound, isLastRound, bonusAwarded, initialPenalty }: RoundCompleteDialogProps) {
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
            {initialPenalty > 0 && (
              <>
                <br />
                A <span className="font-bold">-{initialPenalty} point</span> penalty was applied for the extra time.
              </>
            )}
            <br />
            Your total score for this round is: <span className="font-bold">{score}</span>
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