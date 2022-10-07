import { Text, View, StyleSheet } from 'react-native';

import useSplashScreen from 'src/app/hooks/useSplashScreen';

export default function App() {
  const { onLayoutRootView, fontsLoaded } = useSplashScreen();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'TankerRegular', fontSize: 30 }}>
        Tanker Regular
      </Text>
      <Text style={{ fontFamily: 'HindRegular', fontSize: 30 }}>
        Hind Regular
      </Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
