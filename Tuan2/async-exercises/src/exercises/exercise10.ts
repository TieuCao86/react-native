// Bài 10:
// Sử dụng finally()
// finally() luôn được thực hiện
// dù Promise thành công hay thất bại

export function exercise10(): Promise<string> {
  // Khai báo rõ Promise<string>
  // để TypeScript biết Promise trả về string
  return new Promise<string>((resolve) => {
    // Chờ 1 giây
    setTimeout(() => {
      // Promise thành công
      resolve("Promise completed");
    }, 1000);
  }).finally(() => {
    // finally() được thực hiện sau khi Promise hoàn thành
    console.log("Done");
  });
}

// Test bài 10
exercise10().then((result) => {
  // In kết quả
  console.log("Bài 10 - Kết quả:", result);
});
