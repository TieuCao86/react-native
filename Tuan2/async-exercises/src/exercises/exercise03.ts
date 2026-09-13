// Bài 3:
// Tạo một Promise bị reject với thông báo lỗi
// "Something went wrong" sau 1 giây

export function exercise03(): Promise<never> {
  // Tạo Promise
  return new Promise<never>((_, reject) => {
    // Chờ 1 giây
    setTimeout(() => {
      // Reject Promise với một Error
      reject(new Error("Something went wrong"));
    }, 1000);
  });
}

// Test bài 3
exercise03()
  .then((result) => {
    // Trường hợp Promise thành công
    console.log("Bài 3 - Kết quả:", result);
  })
  .catch((error) => {
    // Bắt lỗi khi Promise bị reject
    console.log("Bài 3 - Lỗi:", error.message);
  });
