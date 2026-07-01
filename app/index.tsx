import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { colors } from "@/theme";

export default function Index() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <View className="flex-1 px-7 pt-8 pb-10">
        <Text className="font-poppins-semibold text-[31px] leading-[38px] tracking-[-0.9px] text-[#0D132B]">
          Home
        </Text>
        <Text className="mt-3 max-w-[280px] font-poppins-regular text-[16px] leading-[26px] text-[#6B7280]">
          You&apos;re verified and ready to start building the lesson flow.
        </Text>

        <View className="mt-10 items-center rounded-[30px] bg-[#F6F7FB] px-6 py-8">
          <Image
            source={images.mascotWelcome}
            style={{ width: 220, height: 220 }}
            contentFit="contain"
          />
          <Text className="mt-6 text-center font-poppins-semibold text-[22px] leading-[28px] tracking-[-0.5px] text-[#0D132B]">
            Welcome to Muolingo
          </Text>
          <Text className="mt-3 text-center font-poppins-regular text-[15px] leading-[24px] text-[#6B7280]">
            This placeholder home route is where we land after the 6-digit
            verification step.
          </Text>
        </View>

        <Link href="/onboarding" className="mt-auto text-center">
          <Text className="font-poppins-semibold text-[16px] leading-[22px] text-[#5B3BF6]">
            Back to onboarding
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
