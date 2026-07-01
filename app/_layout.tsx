import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { Platform, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

import { ClerkProvider, isClerkAvailable, tokenCache } from "@/lib/clerk";
import { colors, fontAssets } from "@/theme";

void SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "";

if (!publishableKey) {
  throw new Error("Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file.");
}

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

  if (!isClerkAvailable && Platform.OS !== "web") {
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
          Unsupported in Expo Go
        </Text>
        <Text style={{ color: colors.neutral.textPrimary, fontSize: 16 }}>
          Clerk requires native support not available in Expo Go.
        </Text>
        <Text
          style={{
            color: colors.neutral.textPrimary,
            fontSize: 15,
            marginTop: 16,
          }}
        >
          Run the app with a custom native build:
        </Text>
        <Text
          style={{
            color: colors.neutral.textSecondary,
            fontSize: 14,
            marginTop: 8,
          }}
        >
          npx expo run:android
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
