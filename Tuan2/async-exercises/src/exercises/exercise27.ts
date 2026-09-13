// Bài 27:
// Tạo hàm fetchWithRetry()
// Nếu API bị lỗi thì thử gọi lại.
//
// retries = số lần thử tối đa.

export async function exercise27(url: string, retries: number) {
  // Lưu lỗi cuối cùng
  let lastError: unknown;

  // Vòng lặp thực hiện request
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      // Gọi API
      const response = await fetch(url);

      // Nếu HTTP status không thành công
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      // API thành công
      return await response.json();
    } catch (error) {
      // Lưu lỗi
      lastError = error;

      // In số lần thử
      console.log(`Attempt ${attempt} failed`);
    }
  }

  // Nếu tất cả lần thử đều thất bại
  throw lastError;
}

// Test bài 27
exercise27("https://jsonplaceholder.typicode.com/todos/1", 3)
  .then((result) => {
    console.log("Bài 27 - Kết quả:", result);
  })
  .catch((error) => {
    console.log("Bài 27 - Lỗi:", error.message);
  });
