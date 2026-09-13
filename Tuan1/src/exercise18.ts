import { displayResult } from "./display";

// Class MathUtil dùng để thực hiện các phép tính toán học
export class MathUtil {
    // Constructor private, không cho phép tạo đối tượng MathUtil
    private constructor() {}
    // Phương thức static cộng hai số
    static add(a: number, b: number): number {
        return a + b;
    }

    // Phương thức static trừ hai số
    static subtract(a: number, b: number): number {
        return a - b;
    }

    // Phương thức static nhân hai số
    static multiply(a: number, b: number): number {
        return a * b;
    }

    // Phương thức static chia hai số
    static divide(a: number, b: number): number {
        // Kiểm tra không cho phép chia cho 0
        if (b === 0) throw new Error("Division by zero");

        return a / b;
    }
}
// Thực hiện các phép tính và hiển thị kết quả
displayResult("Bài 18: MathUtil Operations", {
    addition: MathUtil.add(10, 5),
    subtraction: MathUtil.subtract(10, 5),
    multiplication: MathUtil.multiply(10, 5),
    division: MathUtil.divide(10, 5)
});