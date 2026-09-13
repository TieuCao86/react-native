import { displayResult } from "./display";
// Class Employee là class cha, lưu thông tin nhân viên
export class Employee {
    // Khởi tạo tên và lương của nhân viên
    constructor(public name: string, public salary: number) {}
}
export class Manager extends Employee { // Manager kế thừa từ Employee
    // Phương thức quản lý nhóm
    manageTeam(): void {
        console.log(`${this.name} is managing the team.`);
    }
}
export class Developer extends Employee { // Developer kế thừa từ Employee
    // Phương thức viết code
    writeCode(): void {
        console.log(`${this.name} is writing TypeScript code.`);
    }
}
// Tạo một Manager tên Alice, lương 3500
const mgr = new Manager("Alice", 3500);
// Tạo một Developer tên Bob, lương 2000
const dev = new Developer("Bob", 2000);
// Hiển thị thông tin Manager
displayResult("Bài 14: Manager Entity", mgr);
// Gọi phương thức quản lý nhóm
mgr.manageTeam();
// Hiển thị thông tin Developer
displayResult("Bài 14: Developer Entity", dev);
// Gọi phương thức viết code
dev.writeCode();