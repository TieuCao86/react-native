import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Trỏ ra thư mục src để lấy types.ts
import { RootStackParamList, TabParamList } from "./types"; 
import { FavoritesProvider } from "./FavoritesContext";
import { ProductsTab } from "./ProductsTab";
import { FavoritesTab } from "./FavoritesTab";
import { ProductDetailsScreen } from "./ProductDetailsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "list";

          if (route.name === "Products") {
            iconName = focused ? "phone-portrait" : "phone-portrait-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen 
        name="Products" 
        component={ProductsTab} 
        options={{ title: "Sản phẩm" }} 
      />
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesTab} 
        options={{ title: "Yêu thích" }} 
      />
    </Tab.Navigator>
  );
}

export function StackTabApp() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeTabs} 
            options={{ title: "Cửa hàng" }} 
          />
          <Stack.Screen 
            name="ProductDetails" 
            component={ProductDetailsScreen} 
            options={{ title: "Chi tiết sản phẩm" }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}