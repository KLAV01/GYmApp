import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(app)/admin" options={{ header: () => null }} />
        <Stack.Screen name="(app)/aluno" options={{ header: () => null }} />
        <Stack.Screen name="(app)/personal" options={{ header: () => null }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}


/* 
<TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
albums 
analytics
apps
add
ban
barbell
body
chatbox-ellipses
scale
megaphone
swap-horizontal
people
log-in
star
school
options
medal
list
id-card
ticket
time
*/