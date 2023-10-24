import { Text, SafeAreaView } from "react-native";
import WizardProgressBar from "../../components/organisms/WizardProgressBar";
import { useWizardStore } from "../../store/wizard";
const SignUpStep2 = () => {
  const currentStep = useWizardStore((state) => state.currentStep);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WizardProgressBar value={((currentStep + 1) / 2) * 100} />
      <Text>Step2</Text>
    </SafeAreaView>
  );
};

export default SignUpStep2;
