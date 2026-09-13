// Bài 6:
// Sử dụng Promise.all()
// để chạy 3 Promise song song

// Hàm mô phỏng một task bất đồng bộ
function simulateTask(time: number): Promise<string> {
  return new Promise<string>((resolve) => {
    // Chờ time mili-giây
    setTimeout(() => {
      // Trả về kết quả của task
      resolve(`Task ${time}ms done`);
    }, time);
  });
}

// Hàm bài 6
export function exercise06(): Promise<string[]> {
  // Promise.all() chờ tất cả Promise hoàn thành
  return Promise.all([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(1500),
  ]);
}

// Test bài 6
exercise06().then((result) => {
  // In toàn bộ kết quả
  console.log("Bài 6 - Kết quả:", result);
});
