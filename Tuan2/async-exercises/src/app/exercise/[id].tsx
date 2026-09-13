// src/app/exercise/[id].tsx
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { exercises } from "../../exercises";

export default function ExerciseDetailScreen() {
  const { id } = useLocalSearchParams();
  const currentExercise = exercises.find((ex) => ex.id.toString() === id);

  // State lưu kết quả trả về từ bài tập
  const [result, setResult] = useState<string | null>(null);
  // State hiển thị trạng thái đang tải (chờ Promise resolve)
  const [isLoading, setIsLoading] = useState(false);

  if (!currentExercise) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Không tìm thấy bài tập!</Text>
      </View>
    );
  }

  const handleRunExercise = async () => {
    setIsLoading(true);
    setResult(null); // Xóa kết quả cũ trước khi chạy lại

    try {
      // Đợi hàm run() thực thi (await Promise)
      const output = await currentExercise.run();

      // Chuyển kết quả thành string để in ra màn hình (phòng trường hợp trả về object/number)
      if (output !== undefined) {
        setResult(
          typeof output === "object"
            ? JSON.stringify(output, null, 2)
            : String(output),
        );
      } else {
        setResult("Chạy thành công (Hàm không trả về dữ liệu)");
      }
    } catch (error: any) {
      // Bắt lỗi nếu Promise bị reject (dành cho bài tập Promise Reject, Try/Catch)
      setResult(`Lỗi (Reject/Catch): ${error.message || error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Bài {currentExercise.id}: {currentExercise.title}
      </Text>

      <TouchableOpacity
        style={[styles.runButton, isLoading && styles.buttonDisabled]}
        onPress={handleRunExercise}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.runButtonText}>Chạy thử nghiệm (Run)</Text>
        )}
      </TouchableOpacity>

      {/* Khu vực hiển thị kết quả */}
      <View style={styles.resultBox}>
        <Text style={styles.resultTitle}>Kết quả Output:</Text>
        <Text style={styles.resultContent}>
          {isLoading
            ? "Đang xử lý (đợi 2 giây)..."
            : result || "Chưa có dữ liệu"}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    marginTop: 20,
  },
  runButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 20,
    minWidth: 200,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#A0C4FF",
  },
  runButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultBox: {
    width: "100%",
    backgroundColor: "#f8f9fa",
    borderWidth: 1,
    borderColor: "#dee2e6",
    borderRadius: 8,
    padding: 16,
    marginTop: 20,
    minHeight: 150,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  resultContent: {
    fontSize: 16,
    color: "#212529",
    fontFamily: "monospace", // Đổi font để giống cửa sổ terminal
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
});
