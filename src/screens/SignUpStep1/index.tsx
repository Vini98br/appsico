import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Button, H2, H5, H6, XStack, YStack } from "tamagui";
import WizardProgressBar from "../../components/organisms/WizardProgressBar";
import { useWizardStore } from "../../store/wizard";

const SignUpStep1 = () => {
  const { navigate } = useNavigation();
  const data = useWizardStore((state) => state.data);
  const setData = useWizardStore((state) => state.setData);
  const currentStep = useWizardStore((state) => state.currentStep);
  const setCurrentStep = useWizardStore((state) => state.setCurrentStep);

  const handleNext = () => {
    setCurrentStep(1);
    navigate("SignUpStep2");
  };
  return (
    <View style={{ flex: 1 }}>
      <WizardProgressBar value={((currentStep + 1) / 2) * 100} />
      <YStack alignItems="center">
        <H2>Qual seu tipo de usuário?</H2>
        <H6>Selecione como deve utilizar o app</H6>
      </YStack>
      <XStack>
        <Button
          theme={data.userType === "therapist" ? "active" : undefined}
          onPress={() => setData({ userType: "therapist" })}>
          Terapeuta
        </Button>
        <Button
          theme={data.userType === "patient" ? "active" : undefined}
          onPress={() => setData({ userType: "patient" })}>
          Paciente
        </Button>
      </XStack>
      <Button disabled={data.userType === null} onPress={handleNext}>
        Próximo
      </Button>
    </View>
  );
};

export default SignUpStep1;
