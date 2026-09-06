// Bài 13:
// Sử dụng try/catch với async/await
// để xử lý Promise bị reject.
//
// Sử dụng lại exercise03().

import { exercise03 } from "./exercise03";

export async function exercise13(): Promise<string> {
  try {
    // Gọi Promise có thể bị lỗi
    const result = await exercise03();

    // Nếu thành công
    return result;
  } catch (error) {
    // Bắt lỗi
    if (error instanceof Error) {
      return error.message;
    }

    return "Unknown error";
  }
}

// Test bài 13
exercise13().then((result) => {
  console.log("Bài 13 - Kết quả:", result);
});
