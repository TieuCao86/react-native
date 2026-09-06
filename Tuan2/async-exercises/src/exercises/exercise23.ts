// Bài 23:
// Gọi API lấy danh sách Todo
// sau đó lọc ra những Todo đã completed.

// Kiểu dữ liệu Todo
interface Todo {
  userId: number;

  id: number;

  title: string;

  completed: boolean;
}

export async function exercise23(): Promise<Todo[]> {
  // Gọi API lấy tất cả Todo
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  // Kiểm tra lỗi HTTP
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  // Chuyển response thành mảng Todo
  const todos: Todo[] = await response.json();

  // Chỉ lấy những Todo completed = true
  const completedTodos = todos.filter((todo) => todo.completed);

  return completedTodos;
}

// Test bài 23
exercise23()
  .then((result) => {
    console.log("Bài 23 - Kết quả:", result);
  })
  .catch((error) => {
    console.log("Bài 23 - Lỗi:", error.message);
  });
