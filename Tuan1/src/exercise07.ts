import { displayResult } from "./display";

// Class User dùng để quản lý thông tin người dùng
export class User { 
    // Thuộc tính private, chỉ được truy cập bên trong class
    private _name: string; 
 
    // Constructor khởi tạo tên cho User
    constructor(name: string) { 
        this._name = name; 
    } 
 
    // Getter dùng để lấy giá trị của _name
    get name(): string { 
        return this._name; 
    } 
 
    // Setter dùng để thay đổi giá trị của _name
    set name(value: string) { 
        // Chỉ cập nhật tên nếu không phải chuỗi rỗng
        if (value.trim().length > 0) { 
            this._name = value; 
        } 
    } 
} 
 
// Tạo User với tên ban đầu là Alice
const user = new User("Alice"); 

// Cập nhật tên thông qua setter
user.name = "Alice Nguyen"; 
 
// Hiển thị thông tin User
displayResult("Bài 7: Thông tin User", user);