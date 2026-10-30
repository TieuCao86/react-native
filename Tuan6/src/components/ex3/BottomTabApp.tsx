
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { PHONES } from "../../data/phones";
import { colors } from "../../theme";

type TabParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const ICONS: Record<
  keyof TabParamList,
  [
    keyof typeof Ionicons.glyphMap,
    keyof typeof Ionicons.glyphMap
  ]
> = {
  Home: ["home", "home-outline"],
  Search: ["search", "search-outline"],
  Profile: ["person", "person-outline"],
};

// HOME TAB
function HomeTab() {
  return (
    <FlatList
      data={PHONES}
      keyExtractor={(p) => p.id}
      contentContainerStyle={s.list}
      renderItem={({ item }) => (
        <View style={s.card}>
          <Text style={s.name}>
            {item.name.split(" - ")[0]}
          </Text>
        </View>
      )}
    />
  );
}

// TODO 1: SEARCH TAB
function SearchTab() {
  const [keyword, setKeyword] = useState("");

  const filtered = PHONES.filter((p) =>
    p.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <View style={s.container}>
      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Nhập từ khóa"
        style={s.input}
      />

      <FlatList
        data={filtered}
        keyExtractor={(p) => p.id}
        contentContainerStyle={s.list}
        renderItem={({ item }) => (
          <View style={s.card}>
            <Text style={s.name}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={s.empty}>
            Không có kết quả cho “{keyword}”
          </Text>
        }
      />
    </View>
  );
}

// TODO 2: PROFILE TAB
function ProfileTab() {
  const name = "Cao Quốc Trung";
  const email = "trung@example.com";

  return (
    <View style={s.profile}>
      <View style={s.avatar}>
        <Text style={s.avatarText}>
          {name.charAt(0)}
        </Text>
      </View>

      <Text style={s.profileName}>{name}</Text>
      <Text style={s.email}>{email}</Text>
    </View>
  );
}

// TODO 3: BOTTOM TAB NAVIGATOR
export function BottomTabApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: colors.red,
          tabBarInactiveTintColor: "#777",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={ICONS[route.name][focused ? 0 : 1]}
              size={size}
              color={color}
            />
          ),
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeTab}
          options={{ title: "Trang chủ" }}
        />

        <Tab.Screen
          name="Search"
          component={SearchTab}
          options={{ title: "Tìm kiếm" }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileTab}
          options={{ title: "Cá nhân" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  list: {
    padding: 16,
    gap: 10,
  },
  card: {
    backgroundColor: "#FFF",
    padding: 18,
    borderRadius: 10,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 12,
    margin: 16,
    marginBottom: 0,
    fontSize: 16,
  },
  empty: {
    textAlign: "center",
    marginTop: 30,
    color: "#777",
  },
  profile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#E53935",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFF",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    fontSize: 15,
    color: "#777",
    marginTop: 8,
  },
});
