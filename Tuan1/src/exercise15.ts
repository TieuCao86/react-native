// Import các class Book, User và hàm displayResult
import { Book } from "./exercise06";
import { User } from "./exercise07";
import { displayResult } from "./display";

// Class Library dùng để quản lý sách và người dùng
export class Library {
    // Mảng books lưu danh sách các cuốn sách
    public books: Book[] = [];

    // Mảng users lưu danh sách người dùng
    public users: User[] = [];

    // Thêm một cuốn sách vào thư viện
    addBook(book: Book): void {
        this.books.push(book);
    }

    // Thêm một người dùng vào thư viện
    addUser(user: User): void {
        this.users.push(user);
    }
}

const lib = new Library(); // Tạo một đối tượng Library

lib.addBook(new Book("Clean Code", "Robert C. Martin", 2008)); // Thêm sách "Clean Code" vào thư viện

lib.addUser(new User("Charlie")); // Thêm người dùng Charlie vào thư viện

displayResult("Bài 15: Library Entity", lib); // Hiển thị thông tin thư viện