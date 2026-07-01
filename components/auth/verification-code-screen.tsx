import { useSignIn, useSignUp } from "@/lib/clerk";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/theme";

const CODE_LENGTH = 6;
const RESEND_SECONDS = 51;

function getRawErrorMessage(rawError: unknown) {
  if (!rawError || typeof rawError !== "object") {
    return null;
  }

  const error = rawError as { longMessage?: string; message?: string };

  return error.longMessage ?? error.message ?? null;
}

export function VerificationCodeScreen() {
  const { errors: signInErrors, fetchStatus: signInFetchStatus } = useSignIn();
  const {
    signUp,
    errors: signUpErrors,
    fetchStatus: signUpFetchStatus,
  } = useSignUp();
  const params = useLocalSearchParams<{ email?: string; flow?: string }>();
  const inputRef = useRef<TextInput>(null);
  const [code, setCode] = useState("");
  const [resendSeconds, setResendSeconds] = useState(RESEND_SECONDS);
  const [localError, setLocalError] = useState<string | null>(null);
  const flow = params.flow === "sign-in" ? "sign-in" : "sign-up";
  const email =
    typeof params.email === "string" && params.email.length > 0
      ? params.email
      : "your email";
  const errors = flow === "sign-in" ? signInErrors : signUpErrors;
  const fetchStatus =
    flow === "sign-in" ? signInFetchStatus : signUpFetchStatus;

  useEffect(() => {
    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 250);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (code.length === CODE_LENGTH) {
      Keyboard.dismiss();
    }
  }, [code]);

  useEffect(() => {
    if (resendSeconds === 0) {
      return;
    }

    const timeout = setTimeout(() => {
      setResendSeconds((value) => Math.max(0, value - 1));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [resendSeconds]);

  const handleChangeText = (value: string) => {
    setCode(value.replace(/\D/g, "").slice(0, CODE_LENGTH));
  };

  const handleVerify = async () => {
    setLocalError(null);

    if (flow === "sign-in") {
      setLocalError(
        "This sign-in verification step isn't available in the current app build yet.",
      );
      return;
    }

    if (!signUp) {
      setLocalError("Return to sign up and request a fresh verification code.");
      return;
    }

    const { error } = await signUp.verifications.verifyEmailCode({ code });

    if (error) {
      return;
    }

    if (signUp.status === "complete") {
      await signUp.finalize({
        navigate: async () => {
          router.replace("/");
        },
      });
      return;
    }

    setLocalError(
      "Your account still needs another step before it can finish.",
    );
  };

  const handleResend = async () => {
    setLocalError(null);

    if (flow === "sign-in") {
      setLocalError(
        "Return to sign in and use your password again if you need another attempt.",
      );
      return;
    }

    if (!signUp) {
      setLocalError("Return to sign up and request a fresh verification code.");
      return;
    }

    const { error } = await signUp.verifications.sendEmailCode();

    if (error) {
      return;
    }

    setResendSeconds(RESEND_SECONDS);
  };

  const errorMessage =
    localError ??
    errors?.fields?.code?.message ??
    errors?.global?.[0]?.message ??
    getRawErrorMessage(errors?.raw?.[0]) ??
    null;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <View className="flex-1 px-6 pb-8 pt-2">
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Go back"
          onPress={() => router.back()}
          style={{ width: 44, height: 44, justifyContent: "center" }}
        >
          <Ionicons name="arrow-back" size={30} color="#0D132B" />
        </TouchableOpacity>

        <View className="mt-21">
          <Text className="font-poppins-bold text-[36px] leading-10.75 tracking-[-1.2px] text-text-primary">
            OTP Verification
          </Text>

          <Text className="mt-6 font-poppins-medium text-[18px] leading-[28px] tracking-[-0.2px] text-text-primary">
            Almost There! <Text className="text-[19px]">🎉</Text>
          </Text>

          <Text className="mt-1 max-w-[320px] font-poppins-regular text-[17px] leading-[28px] tracking-[-0.2px] text-text-primary">
            We&apos;ve sent a 6-digit OTP to {email}
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Enter verification code"
          onPress={() => inputRef.current?.focus()}
          className="mt-19"
        >
          <View className="flex-row items-center justify-center gap-2.5 px-1">
            {Array.from({ length: CODE_LENGTH }).map((_, index) => {
              const digit = code[index] ?? "";
              const isActive =
                index === code.length && code.length < CODE_LENGTH;

              return (
                <View
                  key={index}
                  className={`h-20 w-14.5 items-center justify-center rounded-[22px] border bg-white ${
                    digit || isActive
                      ? "border-brand-deep-purple shadow-sm shadow-[#6C4EF5]/10"
                      : "border-[#E8EBF0]"
                  }`}
                >
                  <Text
                    className={`font-poppins-semibold text-[32px] leading-[38px] ${
                      digit ? "text-text-primary" : "text-[#8E939F]"
                    }`}
                  >
                    {digit || "-"}
                  </Text>
                </View>
              );
            })}
          </View>
        </Pressable>

        <View className="mt-12 items-center">
          <Text className="font-poppins-regular text-[15px] leading-[24px] tracking-[-0.15px] text-text-primary">
            🚀 Didn&apos;t receive it?
          </Text>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Resend verification code"
            accessibilityState={{ disabled: resendSeconds > 0 }}
            disabled={resendSeconds > 0}
            onPress={() => void handleResend()}
          >
            <Text
              className="mt-1 font-poppins-medium text-[15px] leading-[24px]"
              style={{
                color:
                  resendSeconds > 0
                    ? colors.neutral.textSecondary
                    : colors.brand.deepPurple,
              }}
            >
              {resendSeconds > 0 ? `Resend (${resendSeconds}s)` : "Resend code"}
            </Text>
          </TouchableOpacity>
        </View>

        {errorMessage ? (
          <Text className="mt-6 text-center font-poppins-medium text-[14px] leading-[22px] text-[#D14343]">
            {errorMessage}
          </Text>
        ) : null}

        <TextInput
          ref={inputRef}
          value={code}
          onChangeText={handleChangeText}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          maxLength={CODE_LENGTH}
          caretHidden
          style={{
            position: "absolute",
            opacity: 0,
            width: 1,
            height: 1,
          }}
        />

        <View className="mt-auto pb-2">
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Verify code"
            accessibilityState={{ disabled: code.length !== CODE_LENGTH }}
            disabled={code.length !== CODE_LENGTH}
            onPress={() => void handleVerify()}
            style={{
              borderRadius: 14,
              backgroundColor:
                code.length === CODE_LENGTH && fetchStatus !== "fetching"
                  ? colors.brand.deepPurple
                  : colors.neutral.border,
              paddingVertical: 19,
              alignItems: "center",
              opacity: code.length === CODE_LENGTH ? 1 : 0.6,
            }}
          >
            <Text
              className="font-poppins-semibold text-[18px] leading-[24px] tracking-[-0.2px]"
              style={{
                color:
                  code.length === CODE_LENGTH
                    ? "#FFFFFF"
                    : colors.neutral.textSecondary,
              }}
            >
              Verify
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
