import React from "react";
import { View, Text, FlatList, StatusBar, SafeAreaView } from "react-native";
import {
  YStack,
  XStack,
  Card,
  Tabs,
  H5,
  Separator,
  SizableText,
  TabsContentProps,
  H1,
  H2,
} from "tamagui";
import SignInForm from "../../components/organisms/Forms/SignIn";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignInScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <YStack
      bg="$red10"
      flex={1}
      paddingHorizontal={"$4"}
      paddingTop={insets.top}>
      <H2>Faça o Login</H2>
      <SignInForm />
    </YStack>
  );
};

export default SignInScreen;
