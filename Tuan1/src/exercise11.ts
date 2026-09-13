import { displayResult } from "./display";
export class Animal { // Class Animal là class cha, dùng để lưu tên của con vật
    // Khởi tạo tên cho Animal
    constructor(public name: string) {}
}
export class Dog extends Animal { // Dog kế thừa từ Animal
    bark(): void { // Phương thức bark() mô phỏng tiếng chó sủa
        console.log(`${this.name}: Woof Woof!`);
    }
}
// Cat kế thừa từ Animal
export class Cat extends Animal {
    // Phương thức meow() mô phỏng tiếng mèo kêu
    meow(): void {
        console.log(`${this.name}: Meow Meow!`);
    }
}
const dog = new Dog("Buddy"); // Tạo một đối tượng Dog có tên Buddy
const cat = new Cat("Kitty"); // Tạo một đối tượng Cat có tên Kitty
displayResult("Bài 11: Dog Info", dog); // Hiển thị thông tin của Dog
dog.bark(); // Gọi phương thức bark() để Dog phát ra tiếng sủa
displayResult("Bài 11: Cat Info", cat); // Hiển thị thông tin của Cat
cat.meow(); // Gọi phương thức meow() để Cat phát ra tiếng kêu