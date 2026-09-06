// Bài 25:
// Giả lập việc download một file.
//
// File sẽ mất 3 giây để download.
// Sử dụng lại exercise05()
// thay vì tạo Promise mới.

import { exercise05 } from "./exercise05";

export async function exercise25(): Promise<string> {
  // Giả lập download trong 3 giây
  const result = await exercise05(3000);

  // Trả về thông báo download hoàn thành
  return `Download completed: ${result}`;
}

// Test bài 25
exercise25().then((result) => {
  console.log("Bài 25 - Kết quả:", result);
});
