import { Platform } from "react-native";
import Constants from "expo-constants";

// Địa chỉ json-server. Khi chạy Expo Go, tự lấy IP máy tính từ hostUri (vd 192.168.1.5:8081)
// → điện thoại và máy tính chỉ cần cùng Wi-Fi. Có thể ghi đè bằng EXPO_PUBLIC_API_URL.
const API_PORT = 3000;

function resolveHost(): string {
  const hostUri = Constants.expoConfig?.hostUri;
  if (hostUri) return hostUri.split(":")[0];
  return Platform.OS === "android" ? "10.0.2.2" : "localhost"; // 10.0.2.2 = máy host của emulator Android
}

export const API_URL = process.env.EXPO_PUBLIC_API_URL ?? `http://${resolveHost()}:${API_PORT}`;

// 👉 Đưa console.log xuống đây để nó in ra đúng giá trị thực tế sau khi API_URL đã được khởi tạo
console.log("👉 Đang kết nối API tới:", API_URL);