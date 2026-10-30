import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme"; // Điều chỉnh đường dẫn theme nếu cần

type DrawerParamList = {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

function HomeScreen() {
    return (
        <View style={s.center}>
            <Text style={s.big}>Xin chào 👋</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={s.center}>
            <View style={s.avatar}>
                <Text style={s.avatarText}>NA</Text>
            </View>
            <Text style={s.big}>Nguyễn Văn An</Text>
            <Text style={s.muted}>an.nguyen@example.com</Text>
        </View>
    );
}

// TODO 1: SettingsScreen — 2 state: notify (mặc định true) và dark (mặc định false)
function SettingsScreen() {
    const [notify, setNotify] = useState(true);
    const [dark, setDark] = useState(false);

    return (
        <View style={[s.settingsContainer, { backgroundColor: dark ? "#121212" : "#fff" }]}>
            <View style={[s.row, { borderBottomColor: dark ? "#333" : "#eee" }]}>
                <Text style={[s.label, { color: dark ? "#fff" : "#333" }]}>Nhận thông báo</Text>
                <Switch value={notify} onValueChange={setNotify} />
            </View>

            <View style={[s.row, { borderBottomColor: dark ? "#333" : "#eee" }]}>
                <Text style={[s.label, { color: dark ? "#fff" : "#333" }]}>Giao diện tối</Text>
                <Switch value={dark} onValueChange={setDark} />
            </View>

            <Text style={[s.status, { color: dark ? "#aaa" : "#555" }]}>
                Thông báo: {notify ? "BẬT" : "TẮT"} · Giao diện: {dark ? "tối" : "sáng"}
            </Text>
        </View>
    );
}

// TODO 2: export function DrawerApp()
export function DrawerApp() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={({ route }) => ({
                    drawerActiveTintColor: colors.red,
                    drawerInactiveTintColor: "#777",
                    drawerIcon: ({ color, size }) => {
                        let iconName: keyof typeof Ionicons.glyphMap = "home-outline";
                        if (route.name === "Home") {
                            iconName = "home-outline";
                        } else if (route.name === "Profile") {
                            iconName = "person-outline";
                        } else if (route.name === "Settings") {
                            iconName = "settings-outline";
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Trang chủ" }}
                />
                <Drawer.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ title: "Cá nhân" }}
                />
                <Drawer.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{ title: "Cài đặt" }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const s = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    settingsContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    label: {
        fontSize: 16,
        color: "#333",
    },
    status: {
        marginTop: 24,
        fontSize: 16,
        fontWeight: "600",
        color: "#555",
        textAlign: "center",
    },
    big: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    muted: {
        fontSize: 15,
        color: "#777",
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
});