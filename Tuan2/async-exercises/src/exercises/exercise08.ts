// Bài 8:
// Tạo một Promise chain:
//
// 2
// -> bình phương
// -> nhân 2
// -> cộng 5
//
// Kết quả:
// 2² = 4
// 4 × 2 = 8
// 8 + 5 = 13

export function exercise08(): Promise<number> {
  // Promise bắt đầu với giá trị 2
  return (
    Promise.resolve(2)

      // Bình phương
      .then((number) => number * number)

      // Nhân 2
      .then((number) => number * 2)

      // Cộng 5
      .then((number) => number + 5)
  );
}

// Test bài 8
exercise08().then((result) => {
  // Kết quả mong đợi: 13
  console.log("Bài 8 - Kết quả:", result);
});
