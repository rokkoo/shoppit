import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./types";

import Home from "src/home";
import ListDetails from "src/home/ListDetails";

const Stack = createNativeStackNavigator<RootStackParamList>();

type AppNavigationProps = {
  onReady: () => void;
};

function AppNavigation({ onReady }: AppNavigationProps) {
  return (
    <NavigationContainer onReady={onReady}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LIST_DETAILS" component={ListDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
