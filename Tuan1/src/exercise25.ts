// Import hàm displayResult để hiển thị kết quả
import { displayResult } from "./display";

// Class Shape dùng để mô tả thông tin chung về hình học
export class Shape {

    // Phương thức static có thể gọi trực tiếp thông qua tên class
    static describe(): string {
        return "A shape is the geometric information of an object.";
    }
}

// Gọi phương thức describe() mà không cần tạo đối tượng Shape
displayResult("Bài 25: Static Shape Description", {
    description: Shape.describe()
});