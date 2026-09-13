// Bài 15:
// Chạy nhiều async function TUẦN TỰ.
//
// Task 2 chỉ bắt đầu sau khi Task 1 hoàn thành.
// Task 3 chỉ bắt đầu sau khi Task 2 hoàn thành.
//
// Tổng thời gian khoảng 3 giây.

import { exercise05 } from "./exercise05";

export async function exercise15(): Promise<string[]> {
  // Mảng lưu kết quả
  const results: string[] = [];

  // Chạy task thứ nhất
  const result1 = await exercise05(1000);
  results.push(result1);

  // Sau task 1 mới chạy task 2
  const result2 = await exercise05(1000);
  results.push(result2);

  // Sau task 2 mới chạy task 3
  const result3 = await exercise05(1000);
  results.push(result3);

  return results;
}

// Test bài 15
exercise15().then((result) => {
  console.log("Bài 15 - Kết quả:", result);
});
