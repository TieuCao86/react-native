// Import hàm displayResult để hiển thị kết quả
import { displayResult } from "./display";

// Class Repository<T> sử dụng Generic để quản lý danh sách dữ liệu
export class Repository<T> {
    // Mảng private lưu trữ các phần tử kiểu T
    private items: T[] = [];

    // Thêm một phần tử vào danh sách
    add(item: T): void {
        this.items.push(item);
    }

    // Lấy toàn bộ danh sách
    getAll(): T[] {
        // Tạo một bản sao của mảng để tránh thay đổi trực tiếp dữ liệu gốc
        return [...this.items];
    }
}

// Interface ProductItem quy định cấu trúc của sản phẩm
interface ProductItem {
    id: number;
    title: string;
}

// Tạo Repository dành cho ProductItem
const repo = new Repository<ProductItem>();

// Thêm sản phẩm Phone vào Repository
repo.add({ id: 1, title: "Phone" });

// Thêm sản phẩm Laptop vào Repository
repo.add({ id: 2, title: "Laptop" });
// Lấy danh sách sản phẩm và hiển thị kết quả
displayResult("Bài 21: Generic Repository Collection", repo.getAll());