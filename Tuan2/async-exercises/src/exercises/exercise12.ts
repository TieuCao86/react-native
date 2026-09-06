// Bài 12:
// Sử dụng async/await để gọi simulateTask()
// và lấy kết quả.
//
// Sử dụng lại exercise05().

import { exercise05 } from "./exercise05";

export async function exercise12(): Promise<string> {
  // Chờ task 2 giây hoàn thành
  const result = await exercise05(2000);

  // In kết quả
  console.log("exercise12:", result);

  // Trả về kết quả
  return result;
}

// Test bài 12
exercise12().then((result) => {
  console.log("Bài 12 - Kết quả:", result);
});
