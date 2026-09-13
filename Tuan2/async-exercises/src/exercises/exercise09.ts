// Bài 9:
// Giả lập việc đọc một mảng sau 1 giây
// Sau đó lọc ra các số chẵn

export function exercise09(): Promise<number[]> {
  return new Promise<number[]>((resolve) => {
    // Chờ 1 giây
    setTimeout(() => {
      // Mảng dữ liệu
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

      // Lọc các số chia hết cho 2
      const evenNumbers = numbers.filter((number) => number % 2 === 0);

      // Trả về mảng số chẵn
      resolve(evenNumbers);
    }, 1000);
  });
}

// Test bài 9
exercise09().then((result) => {
  // Kết quả: [2, 4, 6, 8]
  console.log("Bài 9 - Kết quả:", result);
});
