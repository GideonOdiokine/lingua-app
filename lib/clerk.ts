import type { ComponentType, ReactNode } from "react";
import { Platform } from "react-native";

type ClerkModule = typeof import("@clerk/expo");

let clerkModule: ClerkModule | null = null;
let clerkLoadError: Error | null = null;
let tokenCache: typeof import("@clerk/expo/token-cache").tokenCache | undefined;

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require
  clerkModule = require("@clerk/expo") as ClerkModule;
} catch (error) {
  clerkLoadError =
    error instanceof Error
      ? error
      : new Error("Clerk failed to load in the current runtime.");
}

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require
  tokenCache = require("@clerk/expo/token-cache").tokenCache as typeof tokenCache;
} catch {}

function FallbackProvider({ children }: { children: ReactNode }) {
  return children ?? null;
}

export const ClerkProvider =
  (clerkModule?.ClerkProvider as ComponentType<{
    children: ReactNode;
    publishableKey: string;
    tokenCache?: typeof tokenCache;
  }>) ?? FallbackProvider;

export { tokenCache };

export const isClerkAvailable = clerkModule !== null;

export function getClerkUnavailableReason() {
  if (clerkModule) {
    return null;
  }

  if (Platform.OS === "android" || Platform.OS === "ios") {
    return (
      clerkLoadError?.message ??
      "Clerk native support is unavailable in the current app binary."
    );
  }

  return clerkLoadError?.message ?? "Clerk is unavailable in the current runtime.";
}

export function useAuth() {
  if (clerkModule?.useAuth) {
    return clerkModule.useAuth();
  }

  return {
    isLoaded: true,
    isSignedIn: false,
    userId: undefined,
  };
}

export function useClerk() {
  if (clerkModule?.useClerk) {
    return clerkModule.useClerk();
  }

  return {
    signOut: async () => undefined,
  };
}

export function useSignIn() {
  if (clerkModule?.useSignIn) {
    return clerkModule.useSignIn();
  }

  return {
    signIn: null,
    errors: null,
    fetchStatus: "idle" as const,
  };
}

export function useSignUp() {
  if (clerkModule?.useSignUp) {
    return clerkModule.useSignUp();
  }

  return {
    signUp: null,
    errors: null,
    fetchStatus: "idle" as const,
  };
}

export function useSSO() {
  if (clerkModule?.useSSO) {
    return clerkModule.useSSO();
  }

  return {
    startSSOFlow: async () => ({
      createdSessionId: undefined,
      setActive: undefined,
      signIn: undefined,
      signUp: undefined,
    }),
  };
}

export function useUser() {
  if (clerkModule?.useUser) {
    return clerkModule.useUser();
  }

  return {
    user: null,
  };
}
