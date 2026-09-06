// Bài 26:
// Sử dụng async/await
// kết hợp với setTimeout
// để chờ 5 giây.
//
// Sử dụng lại exercise05().

import { exercise05 } from "./exercise05";

export async function exercise26(): Promise<string> {
  // Chờ 5 giây
  await exercise05(5000);

  // Sau 5 giây trả về kết quả
  return "5 seconds passed";
}

// Test bài 26
exercise26().then((result) => {
  console.log("Bài 26 - Kết quả:", result);
});
