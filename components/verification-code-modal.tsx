import { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

type VerificationCodeModalProps = {
  actionLabel: string;
  visible: boolean;
  onClose: () => void;
  onComplete: () => void;
};

const CODE_LENGTH = 6;

export function VerificationCodeModal({
  actionLabel,
  visible,
  onClose,
  onComplete,
}: VerificationCodeModalProps) {
  const inputRef = useRef<TextInput>(null);
  const [code, setCode] = useState("");

  useEffect(() => {
    if (!visible) {
      setCode("");
      return;
    }

    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 150);

    return () => clearTimeout(timeout);
  }, [visible]);

  useEffect(() => {
    if (code.length === CODE_LENGTH) {
      Keyboard.dismiss();
      onComplete();
    }
  }, [code, onComplete]);

  const handleChangeText = (value: string) => {
    setCode(value.replace(/\D/g, "").slice(0, CODE_LENGTH));
  };

  if (!visible) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: "flex-end",
      }}
      pointerEvents="box-none"
    >
      <Pressable
        onPress={onClose}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(13, 19, 43, 0.2)",
        }}
      >
        <Pressable
          onPress={() => inputRef.current?.focus()}
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "#FFFFFF",
            paddingHorizontal: 22,
            paddingTop: 14,
            paddingBottom: 28,
          }}
        >
          <View className="items-center">
            <View className="h-[5px] w-[54px] rounded-full bg-[#D8DDEC]" />
          </View>

          <Text className="mt-5 font-poppins-semibold text-[24px] leading-[30px] tracking-[-0.6px] text-[#0D132B]">
            Check your email
          </Text>
          <Text className="mt-3 font-poppins-regular text-[15px] leading-[24px] text-[#6B7280]">
            You&apos;ve received a verification email after tapping{" "}
            {actionLabel}. Enter the 6-digit code to continue.
          </Text>

          <View className="mt-7 flex-row justify-between">
            {Array.from({ length: CODE_LENGTH }).map((_, index) => {
              const digit = code[index] ?? "";
              const isActive =
                index === code.length && code.length < CODE_LENGTH;

              return (
                <View
                  key={index}
                  className={`h-[58px] w-[46px] items-center justify-center rounded-[18px] border bg-white ${
                    digit || isActive
                      ? "border-brand-deep-purple"
                      : "border-[#E7EAF3]"
                  }`}
                >
                  <Text className="font-poppins-semibold text-[24px] leading-[30px] text-[#0D132B]">
                    {digit}
                  </Text>
                </View>
              );
            })}
          </View>

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleChangeText}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            maxLength={CODE_LENGTH}
            autoFocus={visible}
            caretHidden
            style={{
              position: "absolute",
              opacity: 0,
              width: 1,
              height: 1,
            }}
          />

          <View className="mt-5" />
        </Pressable>
      </Pressable>
    </KeyboardAvoidingView>
  );
}
