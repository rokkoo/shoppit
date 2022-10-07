import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from 'src/home';

const Stack = createNativeStackNavigator();

type AppNavigationProps = {
  onReady: () => void;
};

function AppNavigation({ onReady }: AppNavigationProps) {
  return (
    <NavigationContainer onReady={onReady}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
