import { displayResult } from "./display";

// Class Account dùng để quản lý thông tin tài khoản
export class Account {
    // public: có thể truy cập từ bên ngoài class
    public accountNumber: string;
    // private: chỉ có thể truy cập bên trong class
    private balance: number;
    // readonly: chỉ được gán giá trị khi khởi tạo, không thể thay đổi sau đó
    readonly createdAt: Date;

    // Constructor dùng để khởi tạo thông tin tài khoản
    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.createdAt = new Date();
    }
    // Hàm trả về số dư tài khoản
    getBalance(): number {
        return this.balance;
    }
}
const acc = new Account("ACC12345", 500); // Tạo tài khoản có số tài khoản ACC12345 và số dư ban đầu là 500
displayResult("Bài 10: Access Modifiers", acc); // Hiển thị thông tin tài khoản