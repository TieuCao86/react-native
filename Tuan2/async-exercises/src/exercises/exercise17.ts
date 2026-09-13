// Bài 17:
// Sử dụng for await...of
// để duyệt qua một danh sách Promise.
//
// Các Promise được tạo trước
// và for await...of lấy kết quả theo thứ tự.

import { exercise05 } from "./exercise05";

export async function exercise17(): Promise<string[]> {
  // Tạo danh sách Promise
  const promises = [exercise05(1000), exercise05(500), exercise05(1500)];

  // Mảng lưu kết quả
  const results: string[] = [];

  // Duyệt qua từng Promise
  for await (const result of promises) {
    results.push(result);
  }

  return results;
}

// Test bài 17
exercise17().then((result) => {
  console.log("Bài 17 - Kết quả:", result);
});
