import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { Platform, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

import {
  ClerkProvider,
  tokenCache,
} from "@/lib/clerk";
import { colors, fontAssets } from "@/theme";

void SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";

export default function RootLayout() {
  const [fontsLoaded] = useFonts(fontAssets);

  useEffect(() => {
    void SystemUI.setBackgroundColorAsync(colors.neutral.background);
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      void SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (!publishableKey) {
    return (
      <View
        style={{
          flex: 1,
          padding: 24,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.neutral.background,
        }}
      >
        <Text
          style={{
            color: colors.semantic.error,
            fontSize: 22,
            fontWeight: "700",
            marginBottom: 16,
          }}
        >
          Clerk configuration missing
        </Text>
        <Text
          style={{
            color: colors.neutral.textPrimary,
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your environment before using
          authentication.
        </Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ClerkProvider
        publishableKey={publishableKey}
        tokenCache={Platform.OS === "web" ? undefined : tokenCache}
      >
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.neutral.background },
          }}
        />
      </ClerkProvider>
    </GestureHandlerRootView>
  );
}
