// Import hàm displayResult để hiển thị kết quả
import { displayResult } from "./display";

// Class Stack<T> sử dụng Generic để tạo một ngăn xếp có thể chứa nhiều kiểu dữ liệu
export class Stack<T> {
    // Mảng private dùng để lưu các phần tử trong Stack
    private elements: T[] = [];

    // Thêm một phần tử vào đỉnh Stack
    push(item: T): void {
        this.elements.push(item);
    }

    // Lấy và xóa phần tử ở đỉnh Stack
    pop(): T | undefined {
        return this.elements.pop();
    }

    // Xem phần tử ở đỉnh Stack nhưng không xóa
    peek(): T | undefined {
        return this.elements[this.elements.length - 1];
    }

    // Kiểm tra Stack có rỗng hay không
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
}
// Tạo Stack chỉ chứa dữ liệu kiểu string
const stack = new Stack<string>();
// Thêm các phần tử vào Stack
stack.push("Alpha");
stack.push("Beta");
stack.push("Gamma");
// Hiển thị trạng thái Stack
displayResult("Bài 22: Stack State", {
    peek: stack.peek(),
    isEmpty: stack.isEmpty(),
    popped: stack.pop()
});