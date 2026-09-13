import { displayResult } from "./display";
export class Animal {
    constructor(public name: string) {}

    protected makeSound(): string {
        return "Generic sound";
    }
}

export class Dog extends Animal { // Dog kế thừa từ Animal
    // Ghi đè phương thức makeSound() của class cha
    public override makeSound(): string {
        return "Woof Woof!";
    }
}
export class Cat extends Animal { // Cat kế thừa từ Animal
    // Ghi đè phương thức makeSound() của class cha
    public override makeSound(): string {
        return "Meow Meow!";
    }
}
// Tạo đối tượng Dog có tên Rex
const dog = new Dog("Rex");
// Tạo đối tượng Cat có tên Mimi
const cat = new Cat("Mimi");
// Hiển thị thông tin và âm thanh của Dog
displayResult("Bài 28: Dog Sound Entity", {
    ...dog,
    sound: dog.makeSound()
});
// Hiển thị thông tin và âm thanh của Cat
displayResult("Bài 28: Cat Sound Entity", {
    ...cat,
    sound: cat.makeSound()
});