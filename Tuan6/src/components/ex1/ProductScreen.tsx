import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Phone } from "../../types";
import { colors, formatPrice } from "../../theme";
import { PHONE_COLORS } from "../../data/phones";
import { Stars } from "../../components/Stars";
import type { SelectPhoneParamList } from "./SelectPhoneApp";

type Props = NativeStackScreenProps<SelectPhoneParamList, "Product"> & {
  phone: Phone;
};

export function ProductScreen({ navigation, route, phone }: Props) {
  const picked = route.params?.color;
  const shown = picked ?? phone.defaultColor;

  return (
    <SafeAreaView style={s.root}>
      <View style={s.imageWrap}>
        <Image
          source={PHONE_COLORS[shown].image}
          style={{ width: 260, height: 360 }}
          resizeMode="contain"
        />
      </View>

      <View style={s.info}>
        <Text style={s.name}>{phone.name}</Text>

        <View style={s.row}>
          <Stars value={phone.rating} />
          <Text style={s.review}>(Xem {phone.reviewCount} đánh giá)</Text>
        </View>

        <View style={s.row}>
          <Text style={s.price}>{formatPrice(phone.price)}</Text>
          <Text style={s.oldPrice}>{formatPrice(phone.oldPrice)}</Text>
        </View>

        <View style={s.row}>
          <Text style={s.badge}>{phone.badge}</Text>
          <Text style={s.question}>?</Text>
        </View>

        {/* TODO 1: Chọn màu */}
        <Pressable
          style={s.chooseBtn}
          onPress={() => navigation.navigate("ChooseColor", { color: picked })}
        >
          <Text style={s.chooseText}>
            {picked ? "4 MÀU-CHỌN LOẠI" : "4 MÀU-CHỌN MÀU"}
          </Text>
          <Text style={s.arrow}>{">"}</Text>
        </Pressable>
      </View>

      {/* TODO 2: Chọn mua */}
      <Pressable style={s.buyBtn}>
        <Text style={s.buyText}>CHỌN MUA</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  imageWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: "85%", height: "100%" },
  info: { gap: 12, paddingBottom: 16 },
  name: { fontSize: 16, color: colors.text },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  review: { fontSize: 13, color: colors.text },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.red,
  },
  oldPrice: {
    fontSize: 13,
    color: colors.muted,
    textDecorationLine: "line-through",
  },
  badge: {
    color: colors.red,
    fontSize: 11,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: colors.red,
    padding: 4,
  },
  question: {
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 20,
    width: 20,
    height: 20,
    textAlign: "center",
  },
  chooseBtn: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 6,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  chooseText: { fontWeight: "bold", color: colors.text },
  arrow: { position: "absolute", right: 12, fontSize: 20 },
  buyBtn: {
    backgroundColor: colors.red,
    borderRadius: 6,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  buyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
