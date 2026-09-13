// Bài 5:
// Tạo hàm simulateTask(time)
// Hàm trả về Promise và hoàn thành sau time mili-giây.
//
// Có thể truyền thêm tên task để kết quả hiển thị rõ.
// Ví dụ:
// simulateTask(1000, "Task 1")
// => "Task 1 done"

export function exercise05(
  time: number = 2000,
  taskName: string = "Task",
): Promise<string> {
  // Tạo Promise
  return new Promise<string>((resolve) => {
    // Chờ số mili-giây được truyền vào
    setTimeout(() => {
      // Trả về kết quả có tên task
      resolve(`${taskName} done`);
    }, time);
  });
}

// Test bài 5
exercise05(2000).then((result) => {
  // Sau 2 giây sẽ in kết quả
  console.log("Bài 5 - Kết quả:", result);
});
