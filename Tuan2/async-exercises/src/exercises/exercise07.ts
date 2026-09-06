// Bài 7:
// Sử dụng Promise.race()
// Promise nào hoàn thành trước thì lấy kết quả của Promise đó

function simulateTask(time: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Task ${time}ms done`);
    }, time);
  });
}

// Hàm bài 7
export function exercise07(): Promise<string> {
  return Promise.race([
    simulateTask(3000),
    simulateTask(1000),
    simulateTask(2000),
  ]);
}

// Test bài 7
exercise07().then((result) => {
  // Task 1000ms sẽ thắng
  console.log("Bài 7 - Kết quả:", result);
});
