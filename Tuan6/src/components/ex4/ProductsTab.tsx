import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { TabProps } from "./types";
import { PHONES } from "../../data/phones";
import { ProductRow } from "./ProductRow";

export function ProductsTab({ navigation }: TabProps<"Products">) {
  // TODO 3: FlatList data={PHONES}; mỗi dòng là <ProductRow phone={item} onPress={...} />
  return (
    <View style={styles.container}>
      <FlatList
        data={PHONES}
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});