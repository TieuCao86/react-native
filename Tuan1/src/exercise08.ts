// Import hàm displayResult để hiển thị kết quả
import { displayResult } from "./display";

// Class Product dùng để lưu thông tin sản phẩm
export class Product {
    // Khởi tạo tên và giá sản phẩm
    constructor(public name: string, public price: number) {}
}

// Tạo danh sách các sản phẩm
const products: Product[] = [
    new Product("Keyboard", 80),
    new Product("Monitor", 250),
    new Product("Mouse", 45),
    new Product("Laptop", 1200)
];

// Lọc các sản phẩm có giá lớn hơn 100
const expensiveProducts = products.filter((p) => p.price > 100);

// Hiển thị danh sách sản phẩm sau khi lọc
displayResult("Bài 8: Filter Products (Price > 100)", expensiveProducts);