// Bài 16:
// Chạy nhiều async function SONG SONG.
//
// Sử dụng Promise.all()
// để chạy các task cùng lúc.
//
// Tổng thời gian sẽ gần bằng task lâu nhất.

import { exercise05 } from "./exercise05";

export async function exercise16(): Promise<string[]> {
  // Các Promise được tạo và chạy cùng lúc
  const results = await Promise.all([
    exercise05(1000),
    exercise05(2000),
    exercise05(1500),
  ]);

  return results;
}

// Test bài 16
exercise16().then((result) => {
  console.log("Bài 16 - Kết quả:", result);
});
