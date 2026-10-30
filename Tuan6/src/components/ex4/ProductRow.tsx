import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Phone } from "../../types";

interface ProductRowProps {
  phone: Phone;
  onPress: () => void;
}

export function ProductRow({ phone, onPress }: ProductRowProps) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      {phone.defaultColor ? (
        <Image source={{ uri: phone.defaultColor }} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage} />
      )}
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>{phone.name}</Text>
        <Text style={styles.price}>{phone.price.toLocaleString("vi-VN")} đ</Text>
        <Text style={styles.rating}>⭐ {phone.rating}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: { width: 60, height: 60, resizeMode: "contain", marginRight: 12 },
  placeholderImage: { width: 60, height: 60, backgroundColor: "#ddd", marginRight: 12, borderRadius: 4 },
  info: { flex: 1 },
  name: { fontSize: 15, fontWeight: "500", marginBottom: 4 },
  price: { fontSize: 14, color: "#e91e63", fontWeight: "bold", marginBottom: 4 },
  rating: { fontSize: 12, color: "#888" },
});