import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import { Header } from "./components/Header";
import { CategoryChips } from "./components/CategoryChips";
import { BookGrid } from "./components/BookGrid";
import { FloatingCartButton } from "./components/FloatingCartButton";

import { BOOKS } from "./data";

export default function App() {
  // Lưu số lượng sách trong giỏ hàng
  const [cartCount, setCartCount] = useState(0);

  return (
    <View style={styles.screen}>
      {/* 1. Header nằm ngoài ScrollView nên không bị cuộn */}
      <Header />

      {/* 2. Nội dung chính có thể cuộn */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Danh mục sách */}
        <CategoryChips />

        {/* Danh sách sách */}
        <BookGrid
          books={BOOKS}
          onPressBook={(id) => {
            // Khi bấm vào sách, tăng số lượng trong giỏ
            setCartCount((current) => current + 1);
          }}
        />
      </ScrollView>

      {/* 3. Nút giỏ hàng nằm ngoài ScrollView nên luôn nổi trên màn hình */}
      <FloatingCartButton
        count={cartCount}
        onPress={() => {
          console.log("Mở giỏ hàng");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    padding: 16,

    // Chừa khoảng trống phía dưới để nút giỏ
    // không che mất những cuốn sách cuối cùng
    paddingBottom: 100,
  },
});
