import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { colors } from "@/theme";
import type { SupportedLanguage } from "@/types/learning";

function LanguageFlag({
  flagCode,
}: {
  flagCode: SupportedLanguage["flagCode"];
}) {
  if (flagCode === "ES") {
    return (
      <View className="h-13 w-13 items-center justify-center rounded-full border border-[#E9EAF2] bg-white">
        <View className="h-8.5 w-8.5 overflow-hidden rounded-full">
          <View className="h-[25%] bg-[#E93030]" />
          <View className="h-[50%] items-center justify-center bg-[#FFC930]">
            <View className="h-3 w-2 rounded-[2px] bg-[#9C2B2E]" />
          </View>
          <View className="h-[25%] bg-[#E93030]" />
        </View>
      </View>
    );
  }

  if (flagCode === "FR") {
    return (
      <View className="h-13 w-13 items-center justify-center rounded-full border border-[#E9EAF2] bg-white">
        <View className="h-8.5 w-8.5 flex-row overflow-hidden rounded-full">
          <View className="flex-1 bg-[#0D4EA6]" />
          <View className="flex-1 bg-white" />
          <View className="flex-1 bg-[#F04343]" />
        </View>
      </View>
    );
  }

  if (flagCode === "JP") {
    return (
      <View className="h-13 w-13 items-center justify-center rounded-full border border-[#E9EAF2] bg-white">
        <View className="h-7 w-7 items-center justify-center rounded-full bg-white">
          <View className="h-6 w-6 rounded-full bg-[#FF3131]" />
        </View>
      </View>
    );
  }

  if (flagCode === "KR") {
    return (
      <View className="h-13 w-13 items-center justify-center rounded-full border border-[#E9EAF2] bg-white">
        <View className="relative h-8.5 w-8.5 items-center justify-center rounded-full bg-white">
          <View style={styles.koreanCenter}>
            <View style={styles.koreanRed} />
            <View style={styles.koreanBlue} />
          </View>
          <View style={styles.krTopLeft} className="absolute">
            <View className="h-[2px] w-2 bg-black" />
            <View className="mt-[1px] h-[2px] w-2 bg-black" />
            <View className="mt-[1px] h-[2px] w-2 bg-black" />
          </View>
          <View style={styles.krTopRight} className="absolute">
            <View className="h-[2px] w-2 bg-black" />
            <View className="mt-[1px] h-[2px] w-2 bg-black" />
            <View className="mt-[1px] h-[2px] w-2 bg-black" />
          </View>
          <View style={styles.krBottomLeft} className="absolute">
            <View className="h-[2px] w-2 bg-black" />
            <View className="mt-[1px] h-[2px] w-2 bg-black" />
          </View>
          <View style={styles.krBottomRight} className="absolute">
            <View className="h-[2px] w-2 bg-black" />
            <View className="mt-[1px] h-[2px] w-2 bg-black" />
          </View>
        </View>
      </View>
    );
  }

  if (flagCode === "DE") {
    return (
      <View className="h-13 w-13 items-center justify-center rounded-full border border-[#E9EAF2] bg-white">
        <View className="h-8.5 w-8.5 overflow-hidden rounded-full">
          <View className="h-[33.3%] bg-black" />
          <View className="h-[33.3%] bg-[#E33A3A]" />
          <View className="h-[33.3%] bg-[#FFC930]" />
        </View>
      </View>
    );
  }

  if (flagCode === "CN") {
    return (
      <View className="h-13 w-13 items-center justify-center rounded-full border border-[#E9EAF2] bg-white">
        <View className="relative h-8.5 w-8.5 overflow-hidden rounded-full bg-[#FF2A23]">
          <Text className="absolute left-[10px] top-[6px] text-[12px] leading-[12px] text-[#FFD54A]">
            ★
          </Text>
          <Text className="absolute left-[20px] top-[6px] text-[6px] leading-[8px] text-[#FFD54A]">
            ★
          </Text>
          <Text className="absolute left-[24px] top-[12px] text-[6px] leading-[8px] text-[#FFD54A]">
            ★
          </Text>
          <Text className="absolute left-[22px] top-[18px] text-[6px] leading-[8px] text-[#FFD54A]">
            ★
          </Text>
          <Text className="absolute left-[17px] top-[22px] text-[6px] leading-[8px] text-[#FFD54A]">
            ★
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="h-13 w-13 items-center justify-center rounded-full border border-[#E9EAF2] bg-white" />
  );
}

export default function LanguageSelectionScreen() {
  const [query, setQuery] = useState("");
  const [selectedLanguageId, setSelectedLanguageId] = useState(
    languages[0]?.id,
  );

  const filteredLanguages = useMemo(() => {
    const searchValue = query.trim().toLowerCase();

    if (!searchValue) {
      return languages;
    }

    return languages.filter((language) => {
      const content = [
        language.name,
        language.nativeName,
        language.sampleGreeting,
      ]
        .join(" ")
        .toLowerCase();

      return content.includes(searchValue);
    });
  }, [query]);

  const selectedLanguage =
    filteredLanguages.find((language) => language.id === selectedLanguageId) ??
    languages.find((language) => language.id === selectedLanguageId) ??
    languages[0];

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <ScrollView
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-5 pb-2 pt-3">
          <View className="relative items-center justify-center pb-8 pt-3">
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Go back"
              className="absolute left-0 top-0 h-12 w-12 items-start justify-center"
              onPress={() => router.back()}
            >
              <Ionicons name="chevron-back" size={32} color="#0D132B" />
            </Pressable>

            <Text className="font-poppins-semibold text-[20px] leading-[28px] tracking-[-0.4px] text-[#0D132B]">
              Choose a language
            </Text>
          </View>

          <View className="language-select-search">
            <Ionicons name="search-outline" size={24} color="#7A829A" />
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search languages"
              placeholderTextColor="#7A829A"
              className="ml-3 flex-1 font-poppins-regular text-[16px] leading-[24px] text-[#0D132B]"
            />
          </View>

          <Text className="pb-4 pt-9 font-poppins-semibold text-[18px] leading-[26px] tracking-[-0.3px] text-[#0D132B]">
            Popular
          </Text>

          <View className="gap-4">
            {filteredLanguages.map((language) => {
              const isSelected = language.id === selectedLanguage?.id;

              return (
                <Pressable
                  key={language.id}
                  accessibilityRole="button"
                  accessibilityLabel={`Select ${language.name}`}
                  className={`language-select-card ${isSelected ? "language-select-card-active" : ""}`}
                  onPress={() => setSelectedLanguageId(language.id)}
                >
                  <LanguageFlag flagCode={language.flagCode} />

                  <View className="ml-4 flex-1">
                    <Text className="font-poppins-medium text-[17px] leading-[24px] tracking-[-0.3px] text-[#0D132B]">
                      {language.name}
                    </Text>
                    <Text className="mt-1 font-poppins-regular text-[14px] leading-[22px] text-[#7A829A]">
                      {language.learnersCount}
                    </Text>
                  </View>

                  {isSelected ? (
                    <View className="h-9 w-9 items-center justify-center rounded-full bg-brand-deep-purple">
                      <Ionicons name="checkmark" size={24} color="#FFFFFF" />
                    </View>
                  ) : (
                    <Ionicons
                      name="chevron-forward"
                      size={24}
                      color="#7A829A"
                    />
                  )}
                </Pressable>
              );
            })}
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Continue with ${selectedLanguage?.name ?? "selected language"}`}
            className="language-select-confirm mt-8"
          >
            <Ionicons name="earth-outline" size={25} color="#5C6480" />
            <Text className="ml-3 font-poppins-medium text-[17px] leading-[24px] tracking-[-0.3px] text-[#0D132B]">
              Continue with {selectedLanguage?.name ?? "language"}
            </Text>
          </Pressable>

          <View className="items-center pt-8">
            <Image
              source={images.earth}
              style={{ width: 338, height: 166 }}
              contentFit="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  koreanCenter: {
    width: 20,
    height: 20,
    transform: [{ rotate: "-32deg" }],
  },
  koreanRed: {
    width: 20,
    height: 10,
    backgroundColor: "#EB2E3E",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  koreanBlue: {
    width: 20,
    height: 10,
    backgroundColor: "#2555D9",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  krTopLeft: {
    left: 5,
    top: 8,
    transform: [{ rotate: "-35deg" }],
  },
  krTopRight: {
    right: 5,
    top: 8,
    transform: [{ rotate: "35deg" }],
  },
  krBottomLeft: {
    left: 6,
    bottom: 10,
    transform: [{ rotate: "35deg" }],
  },
  krBottomRight: {
    right: 6,
    bottom: 10,
    transform: [{ rotate: "-35deg" }],
  },
});
