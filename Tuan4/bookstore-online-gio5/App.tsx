import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { CartScreen } from "./screens/CartScreen";
import { TabBar, TabKey } from "./components/TabBar";
import { CART_ITEMS } from "./data";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("cart");

  return (
    <View style={styles.container}>
      <CartScreen items={CART_ITEMS} />

      <TabBar
        active={activeTab}
        onChange={setActiveTab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});