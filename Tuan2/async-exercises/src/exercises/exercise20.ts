// Bài 20:
// Tạo timeout cho API.
//
// Nếu API hoàn thành trước 2 giây
// -> trả về kết quả.
//
// Nếu API mất hơn 2 giây
// -> throw Error("API call timeout").

import { exercise18, type User } from "./exercise18";

export async function exercise20(id: number): Promise<User> {
  // Tạo Promise timeout 2 giây
  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(new Error("API call timeout"));
    }, 2000);
  });

  // Chạy API và timeout cùng lúc
  return await Promise.race([exercise18(id), timeout]);
}

// Test bài 20
exercise20(1)
  .then((result) => {
    console.log("Bài 20 - Kết quả:", result);
  })
  .catch((error) => {
    console.log("Bài 20 - Lỗi:", error.message);
  });
