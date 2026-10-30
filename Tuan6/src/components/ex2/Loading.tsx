
import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { colors } from "../../theme";

export function Loading() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 12,
    }}>
      <ActivityIndicator size="large" color={colors.blue} />
      <Text>Đang tải...</Text>
    </View>
  );
}
