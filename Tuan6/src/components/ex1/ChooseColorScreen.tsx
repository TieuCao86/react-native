import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ColorKey, Phone } from "../../types";
import { colors, formatPrice } from "../../theme";
import { PHONE_COLORS, COLOR_ORDER } from "../../data/phones";
import type { SelectPhoneParamList } from "./SelectPhoneApp";

type Props = NativeStackScreenProps<SelectPhoneParamList, "ChooseColor"> & {
  phone: Phone;
};

export function ChooseColorScreen({ navigation, route, phone }: Props) {
  const [picked, setPicked] = useState<ColorKey | undefined>(
    route.params?.color,
  );
  const [line1, line2] = phone.name.split(" - ");

  return (
    <SafeAreaView style={s.root}>
      <View style={s.header}>
        <Image
          source={PHONE_COLORS[picked ?? phone.defaultColor].image}
          style={s.thumb}
          resizeMode="contain"
        />
        <View style={s.headerText}>
          <Text style={s.small}>{line1}</Text>
          <Text style={s.small}>{line2}</Text>

          {/* TODO 3: Thông tin sau khi chọn */}
          {picked && (
            <>
              <Text style={s.small}>
                Màu: <Text style={s.bold}>{PHONE_COLORS[picked].label}</Text>
              </Text>
              <Text style={s.small}>
                Cung cấp bởi <Text style={s.bold}>{phone.supplier}</Text>
              </Text>
              <Text style={s.bold}>{formatPrice(phone.price)}</Text>
            </>
          )}
        </View>
      </View>

      <View style={s.body}>
        <Text style={s.hint}>Chọn một màu bên dưới:</Text>

        <View style={s.swatches}>
          {COLOR_ORDER.map((key) => (
            <Pressable
              key={key}
              onPress={() => setPicked(key)}
              style={[
                s.swatch,
                { backgroundColor: PHONE_COLORS[key].hex },
                picked === key && s.swatchOn,
              ]}
            />
          ))}
        </View>

        {/* TODO 4: Xong */}
        <Pressable
          style={s.doneBtn}
          onPress={() => {
            if (!picked) return;
            navigation.navigate(
              "Product",
              { color: picked },
              { merge: true, pop: true },
            );
          }}
        >
          <Text style={s.doneText}>XONG</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    padding: 16,
    minHeight: 145,
    alignItems: "center",
    gap: 14,
  },
  thumb: { width: 105, height: 125 },
  headerText: { flex: 1, gap: 5 },
  small: { fontSize: 14, color: colors.text },
  bold: { fontWeight: "bold", color: colors.text },
  body: {
    flex: 1,
    backgroundColor: colors.grey,
    padding: 16,
  },
  hint: { fontSize: 16, color: colors.text },
  swatches: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  swatch: {
    width: 80,
    height: 80,
  },
  swatchOn: {
    borderWidth: 3,
    borderColor: colors.navy,
  },
  doneBtn: {
    backgroundColor: colors.blue,
    borderRadius: 4,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  doneText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
