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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SignUpForm from "../../components/organisms/Forms/SignUp";

const SignUpScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <YStack
      bg="$red10"
      flex={1}
      paddingHorizontal={"$4"}
      paddingTop={insets.top}>
      <H2>Crie a conta</H2>
      <SignUpForm />
    </YStack>
  );
};

export default SignUpScreen;
