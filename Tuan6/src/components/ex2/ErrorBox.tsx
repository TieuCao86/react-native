
import React from "react";
import { View, Text, Pressable } from "react-native";
import { colors } from "../../theme";

export function ErrorBox({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      gap: 16,
    }}>
      <Text style={{ color: colors.red }}>
        Lỗi: {message}
      </Text>

      <Pressable
        onPress={onRetry}
        style={{
          backgroundColor: colors.blue,
          padding: 14,
          borderRadius: 6,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          THỬ LẠI
        </Text>
      </Pressable>
    </View>
  );
}
