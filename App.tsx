import React from "react";
import { LoginStackScreen } from "./src/routes";
import { TamaguiProvider } from "tamagui";
import { useFonts } from "expo-font";

import config from "./tamagui.config";
import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from "react-native-safe-area-context";
import { View } from "react-native";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config}>
        <LoginStackScreen />
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}
