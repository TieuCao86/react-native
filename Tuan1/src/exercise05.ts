import { displayResult } from "./display"; 

// Class BankAccount dùng để quản lý tài khoản ngân hàng
export class BankAccount { 
    // Khởi tạo số dư, mặc định là 0 nếu không truyền giá trị
    constructor(public balance: number = 0) {} 
 
    // Hàm nạp tiền vào tài khoản
    deposit(amount: number): void { 
        // Chỉ cho phép nạp số tiền lớn hơn 0
        if (amount > 0) this.balance += amount; 
    } 
 
    // Hàm rút tiền, trả về true nếu rút thành công
    withdraw(amount: number): boolean { 
        // Kiểm tra số tiền rút > 0 và không vượt quá số dư
        if (amount > 0 && amount <= this.balance) { 
            this.balance -= amount; 
            return true; 
        } 
        // Rút tiền không hợp lệ hoặc không đủ số dư
        return false; 
    } 
} 
 
const account = new BankAccount(100); 

account.deposit(50); 

account.withdraw(30); 
 
// Hiển thị thông tin tài khoản
displayResult("Bài 5: Thông tin BankAccount", account);