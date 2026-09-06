// Bài 1:
// Tạo một Promise trả về chuỗi "Hello Async" sau 2 giây

export function exercise01(): Promise<string> {
  // Tạo một Promise
  // Promise này sẽ trả về kiểu dữ liệu string
  return new Promise((resolve) => {
    // setTimeout dùng để giả lập một tác vụ bất đồng bộ
    // Chờ 2000ms = 2 giây
    setTimeout(() => {
      // Sau 2 giây, Promise được hoàn thành thành công
      // và trả về kết quả "Hello Async"
      resolve("Hello Async");
    }, 2000);
  });
}

// Gọi hàm exercise01()
// Vì exercise01() trả về Promise nên có thể dùng .then()
// để nhận kết quả sau khi Promise hoàn thành
exercise01().then((result) => {
  // In kết quả ra Console
  console.log("Kết quả:", result);
});
