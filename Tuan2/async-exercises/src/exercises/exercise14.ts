// Bài 14:
// Tạo async function nhận vào một số
// Chờ 1 giây
// Sau đó trả về number * 3

import { exercise05 } from "./exercise05";

export async function exercise14(number: number): Promise<number> {
  // Chờ 1 giây
  await exercise05(1000);

  // Nhân số với 3
  return number * 3;
}

// Test bài 14
exercise14(5).then((result) => {
  // Kết quả: 15
  console.log("Bài 14 - Kết quả:", result);
});
