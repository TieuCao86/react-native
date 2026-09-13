// Bài 28:
// Batch process 5 task cùng lúc.
//
// Sử dụng Promise.all()
// để chạy 5 task song song.
//
// Sử dụng lại exercise05().

import { exercise05 } from "./exercise05";

export async function exercise28(): Promise<string[]> {
  // 5 task được chạy song song
  const results = await Promise.all([
    exercise05(1000, "Task 1"),
    exercise05(1000, "Task 2"),
    exercise05(1000, "Task 3"),
    exercise05(1000, "Task 4"),
    exercise05(1000, "Task 5"),
  ]);

  // In kết quả từng task
  results.forEach((result) => {
    console.log(result);
  });

  return results;
}

// Test bài 28
exercise28().then((result) => {
  console.log("Bài 28 - Kết quả:", result);
});
