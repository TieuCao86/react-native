// Bài 18:
// Giả lập gọi API để lấy thông tin User.
//
// API giả lập sẽ trả về User sau 1 giây.

// Định nghĩa kiểu dữ liệu User
export interface User {
  id: number;

  name: string;
}

// Hàm giả lập API fetchUser()
export function exercise18(id: number): Promise<User> {
  return new Promise<User>((resolve) => {
    // Giả lập thời gian API phản hồi
    setTimeout(() => {
      // Trả về User
      resolve({
        id: id,

        name: `User ${id}`,
      });
    }, 1000);
  });
}

// Test bài 18
exercise18(1).then((result) => {
  console.log("Bài 18 - Kết quả:", result);
});
