import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { RootProps } from "./types";
import { PHONES } from "../../data/phones"; // Hoặc đường dẫn trỏ tới file data của bạn
import { useFavorites } from "./FavoritesContext";
import { Ionicons } from "@expo/vector-icons";

// PHẢI CÓ TỪ KHÓA export function (KHÔNG ĐƯỢC DÙNG export default)
export function ProductDetailsScreen({ route }: RootProps<"ProductDetails">) {
  const { id } = route.params;
  const phone = PHONES.find((p) => p.id === id);

  const { has, toggle } = useFavorites();

  if (!phone) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Không tìm thấy sản phẩm #{id}</Text>
      </View>
    );
  }

  const isFavorite = has(phone.id);

  return (
    <View style={styles.container}>
      <Image source={{ uri: phone.defaultColor }} style={styles.image} />
      <Text style={styles.name}>{phone.name}</Text>
      <Text style={styles.price}>{phone.price.toLocaleString("vi-VN")} đ</Text>
      <Text style={styles.provider}>Nhà cung cấp: {phone.supplier}</Text>
      <Text style={styles.rating}>⭐ {phone.rating} / 5</Text>

      <TouchableOpacity
        style={[styles.button, isFavorite ? styles.btnFavActive : styles.btnFavNormal]}
        onPress={() => toggle(phone.id)}
      >
        <Ionicons 
          name={isFavorite ? "heart" : "heart-outline"} 
          size={20} 
          color={isFavorite ? "#fff" : "#ff5252"} 
        />
        <Text style={[styles.btnText, isFavorite ? styles.textWhite : styles.textRed]}>
          {isFavorite ? " ♥ Đã lưu" : " ♡ Lưu vào yêu thích"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorText: { fontSize: 16, color: "gray" },
  image: { width: "100%", height: 250, resizeMode: "contain", marginBottom: 16 },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  price: { fontSize: 18, color: "#e91e63", fontWeight: "600", marginBottom: 8 },
  provider: { fontSize: 14, color: "#666", marginBottom: 4 },
  rating: { fontSize: 14, color: "#f57c00", marginBottom: 16 },
  button: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ff5252",
  },
  btnFavNormal: { backgroundColor: "#fff" },
  btnFavActive: { backgroundColor: "#ff5252" },
  btnText: { fontSize: 16, fontWeight: "bold", marginLeft: 8 },
  textRed: { color: "#ff5252" },
  textWhite: { color: "#fff" },
});