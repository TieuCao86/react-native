import { displayResult } from "./display";

// Class Book dùng để lưu thông tin của một cuốn sách
export class Book {
    // Khởi tạo tên sách, tác giả và năm xuất bản
    constructor(
        public title: string,
        public author: string,
        public year: number
    ) {}
}

// Tạo một đối tượng Book với thông tin cụ thể
const book = new Book("Clean Code", "Robert C. Martin", 2008);

// Hiển thị thông tin của cuốn sách
displayResult("Bài 6: Thông tin Book", book);