import { useEffect, useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const useSplashScreen = () => {
  const [fontsLoaded] = useFonts({
    HindRegular: require('../../../assets/fonts/Hind-Regular.otf'),
    TankerRegular: require('../../../assets/fonts/Tanker-Regular.otf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return {
    onLayoutRootView,
    fontsLoaded,
  };
};

export default useSplashScreen;
