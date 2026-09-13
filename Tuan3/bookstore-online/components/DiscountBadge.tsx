import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function DiscountBadge({
  discountPercent,
  isNew,
}: {
  discountPercent?: number;
  isNew?: boolean;
}) {
  // Nếu sách không giảm giá và cũng không phải sách mới
  // thì không hiển thị Badge
  if (!discountPercent && !isNew) return null;

  return (
    <View style={[styles.badge, isNew && styles.badgeNew]}>
      {/* Hiển thị "Mới" hoặc phần trăm giảm giá */}
      <Text style={styles.badgeText}>
        {isNew ? "Mới" : `-${discountPercent}%`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    // Đặt Badge nổi lên trên ảnh
    position: "absolute",
    // Cách mép trên 6px
    top: 6,
    // Cách mép trái 6px
    left: 6,
    // Màu đỏ cho Badge giảm giá
    backgroundColor: "#DC2626",
    // Bo góc
    borderRadius: 4,
    // Khoảng cách bên trái và phải của chữ
    paddingHorizontal: 6,
    // Khoảng cách bên trên và dưới của chữ
    paddingVertical: 3,
  },
  badgeNew: {
    // Nếu là sách mới thì đổi sang màu cam
    backgroundColor: "#F97316",
  },
  badgeText: {
    // Màu chữ trắng
    color: "#FFFFFF",
    // Kích thước chữ
    fontSize: 11,
    // Chữ đậm
    fontWeight: "700",
  },
});
