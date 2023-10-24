import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  Button,
  Input,
  Label,
  Separator,
  SizableText,
  YStack,
  Text,
} from "tamagui";

const SignUpForm = () => {
  const { navigate } = useNavigation();
  return (
    <YStack flex={1} width={"100%"}>
      <YStack height={60}>
        <Label width={"100%"} htmlFor="email">
          Email
        </Label>
        <Input flex={1} id="email" />
      </YStack>
      <YStack height={60} mt={"$2"}>
        <Label width={90} htmlFor="password">
          Senha
        </Label>
        <Input flex={1} id="password" />
      </YStack>
      <Button mt={"$4"} onPress={() => navigate("SignUpStep1")}>
        Criar
      </Button>

      <YStack marginVertical={"$4"} alignItems="center" justifyContent="center">
        <Text>
          Já possui conta?{" "}
          <TouchableOpacity onPress={() => navigate("SignIn")}>
            <Text fontWeight={"bold"} textDecorationLine="underline">
              Logar
            </Text>
          </TouchableOpacity>
        </Text>
      </YStack>

      <Separator />
      {/* Social */}
    </YStack>
  );
};

export default SignUpForm;
