import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { colors } from "@/theme";

const bubbleBaseClassName =
  "absolute items-center justify-center rounded-[22px] px-5 py-3";

export default function OnboardingScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.neutral.background }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 28,
          paddingTop: 22,
          paddingBottom: 28,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1">
          <View className="items-center">
            <View className="flex-row items-center gap-3">
              <Image
                source={images.mascotLogo}
                style={{ width: 58, height: 58 }}
                contentFit="contain"
              />
              <Text className="font-poppins-semibold text-[31px] leading-[37px] tracking-[-1.2px] text-[#0A1647]">
                muolingo
              </Text>
            </View>
          </View>

          <View className="mt-[30px]">
            <Text className="font-poppins-semibold text-[33px] leading-[45px] tracking-[-1.3px] text-[#0A1647]">
              Your AI language
            </Text>
            <Text className="font-poppins-semibold text-[33px] leading-[45px] tracking-[-1.3px] text-[#5B3BF6]">
              teacher.
            </Text>
            <Text className="mt-4 max-w-[308px] font-poppins-regular text-[16px] leading-[30px] tracking-[-0.2px] text-[#67708C]">
              Real conversations, personalized lessons, anytime, anywhere.
            </Text>
          </View>

          <View className="relative mt-[30px] min-h-[420px]">
            <View
              className={`${bubbleBaseClassName} left-[2px] top-[28px] -rotate-[7deg] bg-[#EEF6FF]`}
            >
              <Text className="font-poppins-medium text-[18px] leading-[26px] tracking-[-0.7px] text-black">
                Hello!
              </Text>
            </View>

            <View
              className={`${bubbleBaseClassName} right-[6px] top-[16px] rotate-[9deg] bg-[#F6F3FF]`}
            >
              <Text className="font-poppins-medium text-[18px] leading-[26px] tracking-[-0.7px] text-[#4C36FF]">
                iHola!
              </Text>
            </View>

            <View
              className={`${bubbleBaseClassName} right-0 top-[132px] rotate-[9deg] bg-[#FFF3EE] px-6`}
            >
              <Text className="font-poppins-medium text-[18px] leading-[26px] tracking-[-0.7px] text-[#FF5A4E]">
                你好!
              </Text>
            </View>

            <Image
              source={images.mascotWelcome}
              style={{ width: 360, height: 360, alignSelf: "center" }}
              contentFit="contain"
            />
          </View>

          <View className="mt-auto pt-3">
            <Link href="/" asChild>
              <Pressable>
                <View className="flex-row items-center justify-center rounded-[24px] bg-brand-deep-purple px-3 py-2">
                  <Text className="font-poppins-semibold text-[18px] leading-[24px] tracking-[-0.2px] text-white">
                    Get Started
                  </Text>
                  <Text className="ml-[10px] font-poppins-regular text-[34px] leading-[24px] text-white">
                    ›
                  </Text>
                </View>
              </Pressable>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
