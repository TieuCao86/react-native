import { displayResult } from "./display";

export interface Vehicle {
    speed: number;
    drive(): void;
}

export class Car implements Vehicle {
    constructor(public speed: number) {} // Khởi tạo tốc độ của xe

    drive(): void { // Phương thức mô phỏng xe ô tô di chuyển
        console.log(`Car driving at ${this.speed} km/h`);
    }
}

export class Bike implements Vehicle {
    constructor(public speed: number) {} // Khởi tạo tốc độ của xe đạp

    // Phương thức mô phỏng xe đạp di chuyển
    drive(): void {
        console.log(`Bike pedaling at ${this.speed} km/h`);
    }
}

// Tạo một chiếc xe ô tô có tốc độ 100 km/h
const car = new Car(100);

// Tạo một chiếc xe đạp có tốc độ 20 km/h
const bike = new Bike(20);

// Hiển thị danh sách các phương tiện
displayResult("Bài 20: Vehicles Collection", [car, bike]);

// Gọi phương thức drive() của ô tô
car.drive();

// Gọi phương thức drive() của xe đạp
bike.drive();