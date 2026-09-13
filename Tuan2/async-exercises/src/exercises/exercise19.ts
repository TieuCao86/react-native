// Bài 19:
// Tạo hàm fetchUsers(ids)
// để lấy nhiều User cùng lúc.
//
// Sử dụng Promise.all()
// để gọi nhiều API song song.

import { exercise18, type User } from "./exercise18";

export async function exercise19(ids: number[]): Promise<User[]> {
  // map() tạo một Promise cho mỗi ID
  const promises = ids.map((id) => {
    return exercise18(id);
  });

  // Promise.all() chờ tất cả API hoàn thành
  const users = await Promise.all(promises);

  return users;
}

// Test bài 19
exercise19([1, 2, 3]).then((result) => {
  console.log("Bài 19 - Kết quả:", result);
});
