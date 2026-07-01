import { ComponentType, ReactNode } from "react";

let actualClerk: {
  ClerkProvider?: ComponentType<{
    publishableKey: string;
    tokenCache?: unknown;
    children: ReactNode;
  }>;
  useAuth?: () => {
    isLoaded: boolean;
    isSignedIn: boolean;
    userId?: string;
    user?: any;
  };
  useClerk?: () => { signOut: () => Promise<void> };
  useUser?: () => { user?: any };
  useSignIn?: () => { signIn: any; errors?: any; fetchStatus: string };
  useSignUp?: () => { signUp: any; errors?: any; fetchStatus: string };
  useSSO?: () => { startSSOFlow: (options: any) => Promise<any> };
} | null = null;
let actualTokenCache: unknown = undefined;

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  actualClerk = require("@clerk/expo");
} catch {}

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  actualTokenCache = require("@clerk/expo/token-cache").tokenCache;
} catch {}

const FallbackProvider: ComponentType<{ children: ReactNode }> = ({
  children,
}) => (typeof children === "undefined" ? null : (children as any));

export const isClerkAvailable = actualClerk !== null;
export const ClerkProvider = actualClerk?.ClerkProvider ?? FallbackProvider;
export const tokenCache = actualTokenCache;

export function useAuth() {
  if (actualClerk?.useAuth) {
    return actualClerk.useAuth();
  }

  return {
    isLoaded: true,
    isSignedIn: false,
    userId: undefined,
    user: undefined,
  };
}

export function useClerk() {
  if (actualClerk?.useClerk) {
    return actualClerk.useClerk();
  }

  return {
    signOut: async () => undefined,
  };
}

export function useUser() {
  if (actualClerk?.useUser) {
    return actualClerk.useUser();
  }

  return {
    user: undefined,
  };
}

export function useSignIn() {
  if (actualClerk?.useSignIn) {
    return actualClerk.useSignIn();
  }

  return {
    signIn: null,
    errors: null,
    fetchStatus: "idle",
  };
}

export function useSignUp() {
  if (actualClerk?.useSignUp) {
    return actualClerk.useSignUp();
  }

  return {
    signUp: null,
    errors: null,
    fetchStatus: "idle",
  };
}

export function useSSO() {
  if (actualClerk?.useSSO) {
    return actualClerk.useSSO();
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
