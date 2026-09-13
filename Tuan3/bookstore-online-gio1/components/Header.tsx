import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Header() {
  return (
    <View style={styles.header}>
      {/* Tên ứng dụng */}
      <Text style={styles.logo}>BookStore</Text>

      {/* Các icon bên phải */}
      <View style={styles.iconGroup}>
        <Text style={styles.icon}>🔍</Text>
        <Text style={styles.icon}>🛒</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // Sắp xếp các phần tử theo chiều ngang
    flexDirection: "row",
    // Logo bên trái, icon bên phải
    justifyContent: "space-between",
    // Căn các phần tử vào giữa theo chiều dọc
    alignItems: "center",
    // Chiều cao của Header
    height: 56,
    // Khoảng cách bên trái và bên phải
    paddingHorizontal: 16,
    // Màu nền của Header
    backgroundColor: "#1E1B4B",
  },

  logo: {
    // Màu chữ trắng
    color: "#FFFFFF",
    // Kích thước chữ
    fontSize: 17,
    // Chữ đậm
    fontWeight: "700",
  },

  iconGroup: {
    // Đặt 2 icon nằm cạnh nhau
    flexDirection: "row",
    // Khoảng cách giữa 2 icon
    gap: 14,
  },
  icon: {
    // Kích thước icon
    fontSize: 18,
  },
});
