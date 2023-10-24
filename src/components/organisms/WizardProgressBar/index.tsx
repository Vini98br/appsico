import { Progress } from "tamagui";

const WizardProgressBar = ({ value }: { value: number }) => {
  return (
    <Progress value={value} borderRadius={0} height={2}>
      <Progress.Indicator animation="100ms" />
    </Progress>
  );
};

export default WizardProgressBar;
