// Bài 29:
// Queue process.
//
// Các task phải được xử lý TUẦN TỰ.
// Task sau chỉ bắt đầu khi task trước hoàn thành.
//
// Kết quả phải hiển thị rõ:
// Task 1 done
// Task 2 done
// Task 3 done
// Task 4 done
// Task 5 done
//
// Sử dụng lại exercise05().

import { exercise05 } from "./exercise05";

export async function exercise29(): Promise<string[]> {
  // Mảng lưu kết quả của 5 task
  const results: string[] = [];

  // Xử lý từng task theo thứ tự
  for (let i = 0; i < 5; i++) {
    // Tạo tên cho task hiện tại
    const taskName = `Task ${i + 1}`;

    // Task bắt đầu
    console.log(`${taskName} started`);

    // Chờ task hoàn thành
    //
    // Vì sử dụng await nên task tiếp theo
    // chỉ bắt đầu sau khi task hiện tại hoàn thành.
    //
    // Mỗi task mất 1 giây.
    const result = await exercise05(1000, taskName);

    // In kết quả task vừa hoàn thành
    console.log(result);

    // Lưu kết quả
    results.push(result);
  }

  // Trả về toàn bộ kết quả
  return results;
}

// Test bài 29
exercise29().then((result) => {
  // In toàn bộ kết quả
  console.log("Bài 29 - Kết quả:", result);
});
