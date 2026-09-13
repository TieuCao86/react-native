// GIỜ 2 — Bài tập 2: Lưới sản phẩm nhiều cột (chưa dùng FlatList/numColumns,
// chỉ luyện flexbox thuần) + tích hợp DiscountBadge của Giờ 3.
import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Book } from "../data";
import { DiscountBadge } from "./DiscountBadge";

const USE_GAP_LAYOUT = false; // Chọn cách chia layout
const COLUMNS = USE_GAP_LAYOUT ? 3 : 2;
const GAP = 12; // Khoảng cách giữa các sản phẩm
const GAP_ITEM_WIDTH = COLUMNS === 3 ? "30%" : "48%"; // Chiều rộng của mỗi sản phẩm

export function BookGrid({ books, onPressBook }: { books: Book[]; onPressBook: (id: number) => void }) {
  return (
    <View
      style={[
        styles.grid,
        // Nếu dùng gap thì tạo khoảng cách giữa các item
        // Nếu không thì dùng space-between để chia đều 2 cột
        USE_GAP_LAYOUT ? { gap: GAP } : { justifyContent: "space-between" },
      ]}
    >
      {books.map((book) => (
        <Pressable
          key={book.id}
          // Mỗi sản phẩm chiếm khoảng 48% khi có 2 cột
          // hoặc 30% khi có 3 cột
          style={[styles.item, { width: USE_GAP_LAYOUT ? GAP_ITEM_WIDTH : "48%" }]}
          onPress={() => onPressBook(book.id)}
        >
          {/* View bọc ảnh cần position:'relative' để làm containing block cho Badge */}
          <View style={styles.coverWrap}>
            {/* Ảnh bìa sách */}
            <Image source={{ uri: book.cover }} style={styles.cover} />
            {/* Badge giảm giá hoặc "Mới" */}
            <DiscountBadge discountPercent={book.discountPercent} isNew={book.isNew} />
          </View>
          <Text style={styles.title} numberOfLines={2}> {/* Tên sách, tối đa 2 dòng */}
            {book.title}
          </Text>
          {/* Giá sách */}
          <Text style={styles.price}>{book.price.toLocaleString()} đ</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row", // các item chảy theo hàng ngang...
    flexWrap: "wrap", // ...rồi tự xuống hàng khi hết chỗ -> tạo thành lưới
  },
  item: {
    marginBottom: 16, // khoảng cách giữa các HÀNG trong lưới
  },
  coverWrap: {
    position: "relative", // containing block cho DiscountBadge absolute bên trong
    width: "100%",
    aspectRatio: 3 / 4, // giữ tỉ lệ ảnh dù width co giãn theo %, không dùng height cố định
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#EEF2F7",
  },
  cover: {
    width: "100%",
    height: "100%",
  },
  title: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "600",
    color: "#111827",
  },
  price: {
    marginTop: 2,
    fontSize: 13,
    fontWeight: "700",
    color: "#1E1B4B",
  },
});
