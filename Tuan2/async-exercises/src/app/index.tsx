import { Link } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// Import mảng bài tập bạn đã định nghĩa
import { exercises } from "../exercises";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id.toString()} // id của bạn là số, cần chuyển sang string
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/exercise/[id]",
              params: { id: item.id },
            }}
            asChild
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                {item.id}. {item.title}
              </Text>
            </TouchableOpacity>
          </Link>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    padding: 16,
    gap: 12,
  },
  button: {
    padding: 16,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    elevation: 2, // Đổ bóng cho Android
    shadowColor: "#000", // Đổ bóng cho iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
