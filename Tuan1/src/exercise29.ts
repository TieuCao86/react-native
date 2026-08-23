import { displayResult } from "./display";

// Interface Movable quy định đối tượng phải có name và phương thức move()
export interface Movable {
    name: string;
    move(): void;
}
// Class Car implements Movable nên phải có name và move()
export class Car implements Movable {
    // Khởi tạo tên xe, mặc định là "Sedan Car"
    constructor(public name: string = "Sedan Car") {}

    // Phương thức di chuyển của xe
    move(): void {
        console.log(`${this.name} moves on 4 wheels.`);
    }
}
// Class Robot implements Movable nên phải có name và move()
export class Robot implements Movable {
    // Khởi tạo tên robot, mặc định là "Humanoid Robot"
    constructor(public name: string = "Humanoid Robot") {}

    // Phương thức di chuyển của robot
    move(): void {
        console.log(`${this.name} walks on 2 legs.`);
    }
}
const car = new Car();  // Tạo một đối tượng Car với tên mặc định

const robot = new Robot(); // Tạo một đối tượng Robot với tên mặc định

displayResult("Bài 29: Movable Collection", [car, robot]); // Hiển thị danh sách Car và Robot

car.move(); // Gọi phương thức move() của Car

robot.move(); // Gọi phương thức move() của Robot