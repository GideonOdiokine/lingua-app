import { useSignIn, useSignUp, useSSO } from "@/lib/clerk";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as Linking from "expo-linking";
import { Link, router } from "expo-router";
import { useMemo, useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { colors } from "@/theme";

type AuthMode = "sign-up" | "sign-in";

type AuthScreenProps = {
  mode: AuthMode;
};

const socialOptions = [
  {
    label: "Continue with Google",
    icon: <Ionicons name="logo-google" size={27} color="#EA4335" />,
  },
  // {
  //   label: "Continue with Facebook",
  //   icon: <Ionicons name="logo-facebook" size={29} color="#1877F2" />,
  // },
  // {
  //   label: "Continue with Apple",
  //   icon: <Ionicons name="logo-apple" size={28} color="#0D132B" />,
  // },
] as const;

const sparkleClassName =
  "absolute font-poppins-semibold text-[24px] leading-[24px] tracking-[-0.4px]";

function getRawErrorMessage(rawError: unknown) {
  if (!rawError || typeof rawError !== "object") {
    return null;
  }

  const error = rawError as { longMessage?: string; message?: string };

  return error.longMessage ?? error.message ?? null;
}

export function AuthScreen({ mode }: AuthScreenProps) {
  const { startSSOFlow } = useSSO();
  const {
    signIn,
    errors: signInErrors,
    fetchStatus: signInFetchStatus,
  } = useSignIn();
  const {
    signUp,
    errors: signUpErrors,
    fetchStatus: signUpFetchStatus,
  } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [helperMessage, setHelperMessage] = useState<string | null>(null);
  const [activeSocialProvider, setActiveSocialProvider] = useState<
    "google" | null
  >(null);

  const content =
    mode === "sign-in"
      ? {
          title: "Welcome back",
          subtitle: "Keep your language journey going today",
          ctaLabel: "Sign In",
          footerPrefix: "Don't have an account?",
          footerAction: "Sign up",
          footerHref: "/sign-up" as const,
        }
      : {
          title: "Create your account",
          subtitle: "Start your language journey today",
          ctaLabel: "Sign Up",
          footerPrefix: "Already have an account?",
          footerAction: "Log in",
          footerHref: "/sign-in" as const,
        };

  const activeErrors = mode === "sign-in" ? signInErrors : signUpErrors;
  const isSubmitting =
    signInFetchStatus === "fetching" || signUpFetchStatus === "fetching";
  const isSocialSubmitting = activeSocialProvider !== null;
  const clerkErrorMessage = useMemo(() => {
    const firstFieldMessage = Object.values(activeErrors?.fields ?? {}).find(
      (fieldError) => {
        return (
          fieldError &&
          typeof fieldError === "object" &&
          "message" in fieldError &&
          typeof (fieldError as any).message === "string"
        );
      },
    );

    return (
      localError ??
      (firstFieldMessage as any)?.message ??
      activeErrors?.global?.[0]?.message ??
      getRawErrorMessage(activeErrors?.raw?.[0]) ??
      null
    );
  }, [activeErrors, localError]);

  const finishAuthentication = async () => {
    router.replace("/");
  };

  const handleSubmit = async () => {
    const normalizedEmail = email.trim();

    setLocalError(null);
    setHelperMessage(null);

    if (!normalizedEmail || !password) {
      setLocalError("Enter your email and password to continue.");
      return;
    }

    if (mode === "sign-in") {
      if (!signIn) {
        setLocalError("Sign-in is still loading. Please try again.");
        return;
      }

      const { error } = await signIn.password({
        identifier: normalizedEmail,
        password,
      });

      if (error) {
        return;
      }

      if (signIn.status === "complete") {
        await signIn.finalize({
          navigate: finishAuthentication,
        });
        return;
      }

      setLocalError(
        "This sign-in flow needs an extra step that isn't set up yet.",
      );
      return;
    }

    if (!signUp) {
      setLocalError("Sign-up is still loading. Please try again.");
      return;
    }

    const { error: passwordError } = await signUp.password({
      emailAddress: normalizedEmail,
      password,
    });

    if (passwordError) {
      return;
    }

    const { error: verificationError } =
      await signUp.verifications.sendEmailCode();

    if (verificationError) {
      return;
    }

    router.push({
      pathname: "/verify",
      params: {
        email: normalizedEmail,
        flow: "sign-up",
      },
    });
  };

  const handleGoogleAuth = async () => {
    setLocalError(null);
    setHelperMessage(null);
    setActiveSocialProvider("google");

    try {
      const {
        createdSessionId,
        setActive,
        signIn: ssoSignIn,
        signUp: ssoSignUp,
      } = await startSSOFlow({
        strategy: "oauth_google",
        redirectUrl: Linking.createURL("/oauth-callback"),
      });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        await finishAuthentication();
        return;
      }

      const incompleteAttempt = ssoSignIn ?? ssoSignUp;

      if (incompleteAttempt?.status === "missing_requirements") {
        setLocalError(
          "Google sign-in needs additional account details before it can finish here.",
        );
        return;
      }

      setLocalError("Google sign-in could not be completed. Please try again.");
    } catch (error) {
      setLocalError(getRawErrorMessage(error) ?? "Google sign-in failed.");
    } finally {
      setActiveSocialProvider(null);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.neutral.background }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 26,
          paddingTop: 8,
          paddingBottom: 28,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Go back"
          onPress={() => router.back()}
          style={{ width: 44, height: 44, justifyContent: "center" }}
        >
          <Ionicons name="chevron-back" size={30} color="#0D132B" />
        </TouchableOpacity>

        <View className="mt-4.5">
          <Text className="font-poppins-semibold text-[29px] leading-[36px] tracking-[-0.9px] text-[#0D132B]">
            {content.title}
          </Text>
          <Text className="mt-2.5 font-poppins-regular text-[16px] leading-[24px] tracking-[-0.25px] text-[#7A829A]">
            {content.subtitle}{" "}
            <Text className="text-[18px] text-[#FFB000]">✨</Text>
          </Text>
        </View>

        <View className="relative mt-4.5 items-center">
          <Text
            className={`${sparkleClassName} left-16.5 top-14 text-[#FFB000]`}
          >
            ✦
          </Text>
          <Text
            className={`${sparkleClassName} right-15 top-19 text-[#69A8FF]`}
          >
            ✦
          </Text>
          <Text
            className={`${sparkleClassName} right-24 top-31.5 text-[#FFD85E]`}
          >
            ✦
          </Text>
          <Image
            source={images.mascotAuth}
            style={{ width: 248, height: 206 }}
            contentFit="contain"
          />
        </View>

        <View className="mt-1.5 gap-4">
          <View className="rounded-[22px] border border-[#E8EBF4] bg-white px-6 py-4.5">
            <Text className="font-poppins-medium text-[15px] leading-[20px] text-[#8A92AB]">
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter your email"
              placeholderTextColor="#A0A8BF"
              className="mt-2.5 font-poppins-medium text-[16px] leading-[24px] tracking-[-0.2px] text-[#0D132B]"
              style={{ padding: 0 }}
            />
          </View>

          <View className="rounded-[22px] border border-[#E8EBF4] bg-white px-6 py-4.5">
            <Text className="font-poppins-medium text-[15px] leading-[20px] text-[#8A92AB]">
              Password
            </Text>
            <View className="mt-2.5 flex-row items-center">
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                placeholder="Enter your password"
                placeholderTextColor="#A0A8BF"
                className="flex-1 font-poppins-medium text-[16px] leading-[24px] tracking-[-0.2px] text-[#0D132B]"
                style={{ padding: 0 }}
              />
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel={
                  showPassword ? "Hide password" : "Show password"
                }
                onPress={() => setShowPassword((value) => !value)}
              >
                <Feather name="eye" size={24} color="#8A92AB" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {clerkErrorMessage ? (
          <Text className="mt-4 font-poppins-medium text-[14px] leading-[20px] text-[#D14343]">
            {clerkErrorMessage}
          </Text>
        ) : null}

        {helperMessage ? (
          <Text className="mt-4 font-poppins-medium text-[14px] leading-[20px] text-[#67708C]">
            {helperMessage}
          </Text>
        ) : null}

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={content.ctaLabel}
          accessibilityState={{ disabled: isSubmitting || isSocialSubmitting }}
          disabled={isSubmitting || isSocialSubmitting}
          onPress={() => void handleSubmit()}
          style={{
            marginTop: 28,
            borderRadius: 18,
            backgroundColor:
              isSubmitting || isSocialSubmitting ? "#B8AFE9" : "#6C4EF5",
            paddingVertical: 18,
            alignItems: "center",
          }}
        >
          <Text className="font-poppins-semibold text-[18px] leading-[24px] tracking-[-0.2px] text-white">
            {content.ctaLabel}
          </Text>
        </TouchableOpacity>

        <View className="mt-6.5 flex-row items-center">
          <View className="h-px flex-1 bg-[#E8EBF4]" />
          <Text className="mx-5 font-poppins-regular text-[14px] leading-[20px] text-[#7A829A]">
            or continue with
          </Text>
          <View className="h-px flex-1 bg-[#E8EBF4]" />
        </View>

        <View className="mt-6 gap-4">
          {socialOptions.map((option) => (
            <TouchableOpacity
              key={option.label}
              accessibilityRole="button"
              accessibilityLabel={option.label}
              accessibilityState={{
                disabled: isSubmitting || isSocialSubmitting,
              }}
              disabled={isSubmitting || isSocialSubmitting}
              className="flex-row items-center rounded-[20px] border border-[#E8EBF4] bg-white px-4.5 py-4.5"
              onPress={() => void handleGoogleAuth()}
            >
              <View className="w-8.5 items-center">{option.icon}</View>
              <Text className="ml-6.5 font-poppins-medium text-[17px] leading-[24px] tracking-[-0.3px] text-[#0D132B]">
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {mode === "sign-up" ? (
          <View
            nativeID="clerk-captcha"
            style={{
              position: "absolute",
              opacity: 0,
              width: 1,
              height: 1,
              ...(Platform.OS === "web" ? { bottom: 0 } : {}),
            }}
          />
        ) : null}

        <View className="mt-auto flex-row items-center justify-center px-4 pt-12">
          <Text className="font-poppins-regular text-[15px] leading-5.5 text-[#7A829A]">
            {content.footerPrefix}{" "}
          </Text>
          <Link href={content.footerHref} asChild>
            <Pressable>
              <Text className="font-poppins-semibold text-[15px] leading-5.5 text-[#5B3BF6]">
                {content.footerAction}
              </Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
