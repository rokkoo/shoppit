import { Text, View, StyleSheet } from "react-native";

import useSplashScreen from "src/core/hooks/useSplashScreen";
import AppNavigation from "src/navigation";

export default function App() {
  const { onLayoutRootView, fontsLoaded } = useSplashScreen();

  if (!fontsLoaded) {
    return null;
  }

  return <AppNavigation onReady={onLayoutRootView} />;
}
