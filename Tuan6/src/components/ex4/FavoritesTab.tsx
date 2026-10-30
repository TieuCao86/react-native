import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { TabProps } from "./types";
import { PHONES } from "../../data/phones";
import { useFavorites } from "./FavoritesContext";
import { ProductRow } from "./ProductRow";

export function FavoritesTab({ navigation }: TabProps<"Favorites">) {
  // TODO 8: lấy ids từ useFavorites(); lọc PHONES theo ids; danh sách rỗng → "Chưa có sản phẩm nào được lưu."
  const { ids } = useFavorites();
  const favoritePhones = PHONES.filter((phone) => ids.includes(phone.id));

  if (favoritePhones.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.emptyText}>Chưa có sản phẩm nào được lưu.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoritePhones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductRow
            phone={item}
            onPress={() => {
              navigation.navigate("ProductDetails", { id: item.id });
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  center: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
  emptyText: { fontSize: 16, color: "gray", textAlign: "center" },
});