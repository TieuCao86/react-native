// Bài 4:
// Sử dụng .then() và .catch()
// để xử lý Promise thành công hoặc thất bại
//
// Math.random() tạo số ngẫu nhiên từ 0 đến nhỏ hơn 1
// Nếu >= 0.5 -> resolve
// Nếu < 0.5 -> reject

export function exercise04(): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    // Tạo một số ngẫu nhiên
    const number = Math.random();

    // Kiểm tra số ngẫu nhiên
    if (number >= 0.5) {
      // Thành công
      resolve(number);
    } else {
      // Thất bại
      reject(new Error("Random number is less than 0.5"));
    }
  });
}

// Test bài 4
exercise04()
  .then((result) => {
    // Xử lý khi Promise resolve
    console.log("Bài 4 - Kết quả:", result);
  })
  .catch((error) => {
    // Xử lý khi Promise reject
    console.log("Bài 4 - Lỗi:", error.message);
  });
