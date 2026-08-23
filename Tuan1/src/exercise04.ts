export class Rectangle {
    constructor(public width: number, public height: number) {}

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(5, 10);

console.log(`Chiều rộng: ${rect.width}`);
console.log(`Chiều dài: ${rect.height}`);
console.log(`Diện tích: ${rect.calculateArea()}`);
console.log(`Chu vi: ${rect.calculatePerimeter()}`);