// Bài 11:
// Chuyển cách sử dụng Promise ở Bài 1
// sang async/await.
//
// Bài này sử dụng lại exercise01()
// thay vì tạo lại Promise.

import { exercise01 } from "./exercise01";

// async function luôn trả về Promise
export async function exercise11(): Promise<string> {
  // await chờ exercise01() hoàn thành
  const result = await exercise01();

  // Trả về kết quả
  return result;
}

// Test bài 11
exercise11().then((result) => {
  console.log("Bài 11 - Kết quả:", result);
});
