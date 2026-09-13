import { displayResult } from "./display";
// Class Logger dùng để tạo hệ thống ghi log theo Singleton
export class Logger {
    // Lưu instance duy nhất của Logger
    private static instance: Logger;
    // Đếm số lượng log đã ghi
    public logsCount: number = 0;

    // Constructor private để không cho phép tạo Logger bằng new từ bên ngoài
    private constructor() {}

    // Hàm static dùng để lấy instance duy nhất của Logger
    public static getInstance(): Logger {
        // Nếu chưa có instance thì tạo mới
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        // Trả về instance duy nhất
        return Logger.instance;
    }

    // Hàm log dùng để ghi nội dung ra màn hình
    log(message: string): void {
        // Tăng số lượng log lên 1
        this.logsCount++;

        // In nội dung log
        console.log(`[LOG]: ${message}`);
    }
}

const logger1 = Logger.getInstance(); // Lấy instance duy nhất của Logger
logger1.log("System initialized."); // Ghi log lần thứ nhất
logger1.log("Server running on port 3000."); // Ghi log lần thứ hai
displayResult("Bài 17: Singleton Logger Entity", logger1); // Hiển thị thông tin Logger