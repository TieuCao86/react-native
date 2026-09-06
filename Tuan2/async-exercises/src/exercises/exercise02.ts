// Bài 2:
// Tạo một Promise trả về số 10 sau 1 giây

export function exercise02(): Promise<number> {
  // Tạo Promise trả về kiểu number
  return new Promise<number>((resolve) => {
    // Chờ 1 giây
    setTimeout(() => {
      // Promise hoàn thành thành công
      // và trả về giá trị 10
      resolve(10);
    }, 1000);
  });
}

// Test bài 2
exercise02().then((result) => {
  // In kết quả ra Console
  console.log("Bài 2 - Kết quả:", result);
});
