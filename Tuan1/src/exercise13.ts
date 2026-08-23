import { displayResult } from "./display";
// Class Shape là class trừu tượng, dùng làm class cha
export abstract class Shape {
    abstract area(): number; 
}
export class Square extends Shape { // Square kế thừa từ Shape
    constructor(public side: number) {
        super();
    }
    // Tính diện tích hình vuông
    area(): number {
        return this.side * this.side;
    }
}
// Circle kế thừa từ Shape
export class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }
    // Tính diện tích hình tròn
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}
const sq = new Square(4); // Tạo hình vuông có cạnh bằng 4
const cr = new Circle(3); // Tạo hình tròn có bán kính bằng 3

// Hiển thị thông tin và diện tích hình vuông
displayResult("Bài 13: Square Entity", {
    ...sq,
    area: sq.area()
});
// Hiển thị thông tin và diện tích hình tròn, làm tròn 2 chữ số
displayResult("Bài 13: Circle Entity", {
    ...cr,
    area: Number(cr.area().toFixed(2))
});