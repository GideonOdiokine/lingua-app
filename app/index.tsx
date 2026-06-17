import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/theme";

export default function Index() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.neutral.background }}
    >
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.neutral.background }}
        contentContainerStyle={{
          paddingTop: 16,
          paddingBottom: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 items-center justify-center">
          <Text className="ds-section-title mt-90 ">Lingua</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
