// Bài 21:
// Sử dụng fetch() để gọi API JSONPlaceholder
// và lấy Todo có id = 1.

// Hàm thực hiện API request
export async function exercise21() {
  // Gửi GET request
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  // Kiểm tra HTTP status
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  // Chuyển response thành JSON
  const data = await response.json();

  // Trả về dữ liệu
  return data;
}

// Test bài 21
exercise21()
  .then((result) => {
    console.log("Bài 21 - Kết quả:", result);
  })
  .catch((error) => {
    console.log("Bài 21 - Lỗi:", error.message);
  });
