// Bài 22:
// Gọi API nhiều lần
// để lấy Todo có id 1, 2 và 3.
//
// Sử dụng Promise.all()
// để gọi các API song song.

// Kiểu dữ liệu Todo
interface Todo {
  userId: number;

  id: number;

  title: string;

  completed: boolean;
}

// Hàm lấy một Todo
async function fetchTodo(id: number): Promise<Todo> {
  // Gọi API
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );

  // Kiểm tra lỗi HTTP
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  // Chuyển thành JSON
  return await response.json();
}

// Hàm bài 22
export async function exercise22(): Promise<Todo[]> {
  // Gọi 3 API song song
  const results = await Promise.all([fetchTodo(1), fetchTodo(2), fetchTodo(3)]);

  return results;
}

// Test bài 22
exercise22()
  .then((result) => {
    console.log("Bài 22 - Kết quả:", result);
  })
  .catch((error) => {
    console.log("Bài 22 - Lỗi:", error.message);
  });
