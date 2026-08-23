// Import class Person và hàm displayResult
import { Person } from "./exercise01";
import { displayResult } from "./display";

// Class Teacher kế thừa từ Person
export class Teacher extends Person {
    // Khởi tạo tên, tuổi và môn học của giáo viên
    constructor(
        name: string,
        age: number,
        public subject: string
    ) {
        // Gọi constructor của class Person để khởi tạo name và age
        super(name, age);
    }

    // Phương thức giới thiệu thông tin giáo viên
    introduce(): void {
        console.log(`Hello, I am ${this.name}, teaching ${this.subject}.`);
    }
}

// Tạo một đối tượng Teacher
const teacher = new Teacher("Mr. John", 40, "Mathematics");

// Hiển thị thông tin giáo viên
displayResult("Bài 27: Teacher Entity", teacher);

// Gọi phương thức giới thiệu
teacher.introduce();