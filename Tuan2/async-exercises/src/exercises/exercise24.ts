// Bài 24:
// Sử dụng fetch() với method POST
// để gửi dữ liệu lên API JSONPlaceholder.

export async function exercise24() {
  // Gửi POST request
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // HTTP method
    method: "POST",

    // Header cho biết dữ liệu gửi lên là JSON
    headers: {
      "Content-Type": "application/json",
    },

    // Chuyển object thành JSON string
    body: JSON.stringify({
      title: "Async Exercise",

      body: "Hello Expo",

      userId: 1,
    }),
  });

  // Kiểm tra HTTP status
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  // Đọc response JSON
  const data = await response.json();

  return data;
}

// Test bài 24
exercise24()
  .then((result) => {
    console.log("Bài 24 - Kết quả:", result);
  })
  .catch((error) => {
    console.log("Bài 24 - Lỗi:", error.message);
  });
