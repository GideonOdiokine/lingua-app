import { useClerk, useUser } from "@/lib/clerk";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { colors } from "@/theme";

export default function HomeScreen() {
  const { signOut } = useClerk();
  const { user } = useUser();

  const emailAddress =
    user?.primaryEmailAddress?.emailAddress ?? "your account";

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <View className="flex-1 px-7 pb-8 pt-6">
        <View className="rounded-[28px] bg-white px-6 py-6 shadow-sm">
          <Text className="font-poppins-semibold text-[28px] leading-[34px] tracking-[-0.8px] text-[#0D132B]">
            You&apos;re signed in
          </Text>
          <Text className="mt-3 font-poppins-regular text-[16px] leading-[26px] text-[#67708C]">
            Your Clerk account is connected and ready for the lesson flow.
          </Text>
          <Text className="mt-4 font-poppins-medium text-[15px] leading-[24px] text-brand-deep-purple">
            {emailAddress}
          </Text>
        </View>

        <View className="mt-10 items-center">
          <Image
            source={images.mascotAuth}
            style={{ width: 250, height: 210 }}
            contentFit="contain"
          />
          <Text className="mt-6 text-center font-poppins-semibold text-[24px] leading-[32px] tracking-[-0.6px] text-[#0D132B]">
            First account complete
          </Text>
          <Text className="mt-3 max-w-[280px] text-center font-poppins-regular text-[15px] leading-[26px] text-[#67708C]">
            Next up, we can connect this signed-in state to lesson progress,
            onboarding, and your first protected screens.
          </Text>
        </View>

        <Link href="/language-selection" asChild>
          <Pressable
            accessibilityRole="button"
            className="mt-8 rounded-[20px] border border-[#E8EBF4] bg-white px-6 py-4"
          >
            <Text className="text-center font-poppins-semibold text-[17px] leading-[24px] text-[#0D132B]">
              Open language selection
            </Text>
          </Pressable>
        </Link>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Sign out"
          className="mt-auto items-center rounded-[20px] bg-brand-deep-purple px-6 py-4"
          onPress={() => void signOut()}
        >
          <Text className="font-poppins-semibold text-[17px] leading-[24px] text-white">
            Sign out
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
