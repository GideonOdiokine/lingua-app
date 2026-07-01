import { Feather, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
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

import { VerificationCodeModal } from "./verification-code-modal";

type AuthMode = "sign-up" | "sign-in";

type AuthScreenProps = {
  mode: AuthMode;
};

const socialOptions = [
  {
    label: "Continue with Google",
    icon: <Ionicons name="logo-google" size={27} color="#EA4335" />,
  },
  {
    label: "Continue with Facebook",
    icon: <Ionicons name="logo-facebook" size={29} color="#1877F2" />,
  },
  {
    label: "Continue with Apple",
    icon: <Ionicons name="logo-apple" size={28} color="#0D132B" />,
  },
] as const;

const sparkleClassName =
  "absolute font-poppins-semibold text-[24px] leading-[24px] tracking-[-0.4px]";

export function AuthScreen({ mode }: AuthScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [verificationVisible, setVerificationVisible] = useState(false);

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

        <View className="mt-[18px]">
          <Text className="font-poppins-semibold text-[29px] leading-[36px] tracking-[-0.9px] text-[#0D132B]">
            {content.title}
          </Text>
          <Text className="mt-[10px] font-poppins-regular text-[16px] leading-[24px] tracking-[-0.25px] text-[#7A829A]">
            {content.subtitle}{" "}
            <Text className="text-[18px] text-[#FFB000]">✨</Text>
          </Text>
        </View>

        <View className="relative mt-[18px] items-center">
          <Text
            className={`${sparkleClassName} left-[66px] top-[56px] text-[#FFB000]`}
          >
            ✦
          </Text>
          <Text
            className={`${sparkleClassName} right-[60px] top-[76px] text-[#69A8FF]`}
          >
            ✦
          </Text>
          <Text
            className={`${sparkleClassName} right-[96px] top-[126px] text-[#FFD85E]`}
          >
            ✦
          </Text>
          <Image
            source={images.mascotAuth}
            style={{ width: 248, height: 206 }}
            contentFit="contain"
          />
        </View>

        <View className="mt-[6px] gap-4">
          <View className="rounded-[22px] border border-[#E8EBF4] bg-white px-6 py-[18px]">
            <Text className="font-poppins-medium text-[15px] leading-[20px] text-[#8A92AB]">
              Email
            </Text>
            <TextInput
              defaultValue={mode === "sign-up" ? "" : ""}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter your email"
              placeholderTextColor="#A0A8BF"
              className="mt-[10px] font-poppins-medium text-[16px] leading-[24px] tracking-[-0.2px] text-[#0D132B]"
              style={{ padding: 0 }}
            />
          </View>

          {mode === "sign-up" ? (
            <View className="rounded-[22px] border border-[#E8EBF4] bg-white px-6 py-[18px]">
              <Text className="font-poppins-medium text-[15px] leading-[20px] text-[#8A92AB]">
                Password
              </Text>
              <View className="mt-[10px] flex-row items-center">
                <TextInput
                  defaultValue=""
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
          ) : null}
        </View>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={content.ctaLabel}
          onPress={() => setVerificationVisible(true)}
          style={{
            marginTop: 28,
            borderRadius: 18,
            backgroundColor: "#6C4EF5",
            paddingVertical: 18,
            alignItems: "center",
          }}
        >
          <Text className="font-poppins-semibold text-[18px] leading-[24px] tracking-[-0.2px] text-white">
            {content.ctaLabel}
          </Text>
        </TouchableOpacity>

        <View className="mt-[26px] flex-row items-center">
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
              className="flex-row items-center rounded-[20px] border border-[#E8EBF4] bg-white px-[18px] py-[18px]"
            >
              <View className="w-[34px] items-center">{option.icon}</View>
              <Text className="ml-[26px] font-poppins-medium text-[17px] leading-[24px] tracking-[-0.3px] text-[#0D132B]">
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="mt-auto flex-row items-center justify-center px-4 pt-12">
          <Text className="font-poppins-regular text-[15px] leading-[22px] text-[#7A829A]">
            {content.footerPrefix}{" "}
          </Text>
          <Link href={content.footerHref} asChild>
            <Pressable>
              <Text className="font-poppins-semibold text-[15px] leading-[22px] text-[#5B3BF6]">
                {content.footerAction}
              </Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>

      <VerificationCodeModal
        actionLabel={content.ctaLabel}
        visible={verificationVisible}
        onClose={() => setVerificationVisible(false)}
        onComplete={() => {
          setVerificationVisible(false);
          router.replace("/");
        }}
      />
    </SafeAreaView>
  );
}
