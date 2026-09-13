// Import hàm displayResult để hiển thị kết quả
import { displayResult } from "./display";

// Class Box<T> sử dụng Generic để có thể chứa nhiều kiểu dữ liệu khác nhau
export class Box<T> {
    // Khởi tạo Box với một giá trị có kiểu T
    constructor(public content: T) {}

    // Lấy giá trị bên trong Box
    getValue(): T {
        return this.content;
    }

    // Thay đổi giá trị bên trong Box
    setValue(value: T): void {
        this.content = value;
    }
}

// Tạo Box chứa dữ liệu kiểu string
const strBox = new Box<string>("TypeScript");

// Tạo Box chứa dữ liệu kiểu number
const numBox = new Box<number>(2026);

// Hiển thị Box chứa chuỗi
displayResult("Bài 16: String Box Entity", strBox);

// Hiển thị Box chứa số
displayResult("Bài 16: Number Box Entity", numBox);