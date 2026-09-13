import { Product } from "./exercise08";
import { displayResult } from "./display";

// Class Order dùng để quản lý các sản phẩm trong đơn hàng
export class Order {
    // Mảng products lưu danh sách sản phẩm
    public products: Product[] = [];

    // Thêm một sản phẩm vào đơn hàng
    addProduct(product: Product): void {
        this.products.push(product);
    }

    // Tính tổng tiền của tất cả sản phẩm
    calculateTotalPrice(): number {
        // reduce() cộng giá của từng sản phẩm
        return this.products.reduce((sum, item) => sum + item.price, 0);
    }
}

// Tạo một đơn hàng mới
const order = new Order();
// Thêm bàn phím giá 120 vào đơn hàng
order.addProduct(new Product("Mechanical Keyboard", 120));
// Thêm chuột giá 60 vào đơn hàng
order.addProduct(new Product("Gaming Mouse", 60));
// Hiển thị danh sách sản phẩm trong đơn hàng
displayResult("Bài 26: Order Products List", order.products);
// Hiển thị tổng số sản phẩm và tổng tiền
displayResult("Bài 26: Order Summary", {
    totalItems: order.products.length,
    totalPrice: order.calculateTotalPrice()
});