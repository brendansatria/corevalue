import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface CaseStudyResultDialogProps {
  open: boolean;
  rpChange: number;
  cpChange: number;
  onContinue: () => void;
}

export function CaseStudyResultDialog({ open, rpChange, cpChange, onContinue }: CaseStudyResultDialogProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Case Study Results</AlertDialogTitle>
          <AlertDialogDescription>
            Here's how your decision impacted your scores:
            <p className="font-bold mt-2">
              Revenue Points: <span className={rpChange >= 0 ? 'text-green-600' : 'text-red-600'}>{rpChange >= 0 ? `+${rpChange}` : rpChange}</span>
            </p>
            <p className="font-bold">
              Customer Satisfaction: <span className={cpChange >= 0 ? 'text-green-600' : 'text-red-600'}>{cpChange >= 0 ? `+${cpChange}` : cpChange}</span>
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onContinue}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}