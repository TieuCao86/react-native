// Bài 30:
// Sử dụng Promise.allSettled()
// để chạy nhiều API.
//
// Khác với Promise.all():
// Promise.allSettled() không dừng khi một Promise lỗi.
//
// Nó trả về kết quả của TẤT CẢ request:
// - fulfilled -> thành công
// - rejected -> thất bại

// Danh sách API cần gọi
const urls = [
  // API hợp lệ
  "https://jsonplaceholder.typicode.com/todos/1",

  // API hợp lệ
  "https://jsonplaceholder.typicode.com/todos/2",

  // URL không hợp lệ
  "https://invalid-url-example.com",

  // API hợp lệ
  "https://jsonplaceholder.typicode.com/todos/4",
];

// Hàm gọi API
async function fetchData(url: string) {
  // Gửi request
  const response = await fetch(url);

  // Kiểm tra HTTP status
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  // Trả về JSON
  return await response.json();
}

// Hàm bài 30
export async function exercise30() {
  // Chạy tất cả request cùng lúc
  const results = await Promise.allSettled(urls.map((url) => fetchData(url)));

  // Chuyển kết quả về format dễ đọc
  return results.map((result, index) => {
    // Promise thành công
    if (result.status === "fulfilled") {
      return {
        request: index + 1,

        status: "SUCCESS",

        data: result.value,
      };
    }

    // Promise thất bại
    return {
      request: index + 1,

      status: "FAILED",

      error: String(result.reason),
    };
  });
}

// Test bài 30
exercise30().then((result) => {
  console.log("Bài 30 - Kết quả:", result);
});
