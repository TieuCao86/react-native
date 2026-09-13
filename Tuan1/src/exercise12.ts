import { displayResult } from "./display";

// Interface Flyable quy định đối tượng phải có phương thức fly()
export interface Flyable {
    fly(): void;
}
// Interface Swimmable quy định đối tượng phải có phương thức swim()
export interface Swimmable {
    swim(): void;
}
// Class Bird implements Flyable nên phải có phương thức fly()
export class Bird implements Flyable {
    // Phương thức mô phỏng hành động bay
    fly(): void {
        console.log("Bird is flying.");
    }
}
// Class Fish implements Swimmable nên phải có phương thức swim()
export class Fish implements Swimmable {
    // Phương thức mô phỏng hành động bơi
    swim(): void {
        console.log("Fish is swimming.");
    }
}
// Tạo đối tượng Bird
const bird = new Bird();
// Tạo đối tượng Fish
const fish = new Fish();
// Hiển thị thông tin của Bird
displayResult("Bài 12: Entity Bird", bird);
// Gọi phương thức fly()
bird.fly();
// Hiển thị thông tin của Fish
displayResult("Bài 12: Entity Fish", fish);
// Gọi phương thức swim()
fish.swim();