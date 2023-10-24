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

const SignInForm = () => {
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
      <Button mt={"$4"} onPress={() => navigate("LoggedArea")}>
        Entrar
      </Button>

      <YStack marginVertical={"$4"} alignItems="center">
        <Text>
          Não tem uma conta?{" "}
          <TouchableOpacity onPress={() => navigate("SignUp")}>
            <Text fontWeight={"bold"} textDecorationLine="underline">
              Criar
            </Text>
          </TouchableOpacity>
        </Text>
      </YStack>

      <Separator />
      {/* Social */}
    </YStack>
  );
};

export default SignInForm;
