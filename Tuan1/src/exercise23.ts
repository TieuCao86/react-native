import { displayResult } from "./display";
// Interface Payment quy định mọi phương thức thanh toán phải có hàm pay()
export interface Payment {
    pay(amount: number): void;
}
// CashPayment dùng để thanh toán bằng tiền mặt
export class CashPayment implements Payment {
    // Khởi tạo loại tiền, mặc định là USD
    constructor(public currency: string = "USD") {}

    // Thực hiện thanh toán bằng tiền mặt
    pay(amount: number): void {
        console.log(`Paid ${amount} ${this.currency} in cash.`);
    }
}
// CardPayment dùng để thanh toán bằng thẻ
export class CardPayment implements Payment {
    // Khởi tạo số thẻ
    constructor(public cardNumber: string) {}

    // Thực hiện thanh toán bằng thẻ
    pay(amount: number): void {
        // slice(-4) lấy 4 số cuối của số thẻ
        console.log(`Paid $${amount} with card ending in ${this.cardNumber.slice(-4)}.`);
    }
}
// Tạo phương thức thanh toán tiền mặt bằng VND
const cash = new CashPayment("VND");
// Tạo phương thức thanh toán bằng thẻ
const card = new CardPayment("4111222233334444");
// Hiển thị thông tin thanh toán tiền mặt
displayResult("Bài 23: Cash Payment Entity", cash);

// Thực hiện thanh toán 500000 VND
cash.pay(500000);

// Hiển thị thông tin thanh toán bằng thẻ
displayResult("Bài 23: Card Payment Entity", card);

// Thực hiện thanh toán 150 USD
card.pay(150);