import { displayResult } from "./display";

export class Animal {
    constructor(public species: string = "Generic Animal") {}

    makeSound(): void {
        console.log("Some generic animal sound");
    }
}
export class Dog extends Animal {
    constructor() {
        super("Dog");
    }

    override makeSound(): void { //Ghi đè phương thức makeSound() của Animal
        console.log("Woof Woof!");
    }
}
export class Cat extends Animal {
    constructor() {
        super("Cat");
    }

    override makeSound(): void { // Ghi đè phương thức makeSound() của Animal
        console.log("Meow Meow!");
    }
}

// Tạo danh sách gồm Animal, Dog và Cat
const animals: Animal[] = [new Animal(), new Dog(), new Cat()];

// Hiển thị danh sách các con vật
displayResult("Bài 19: Animals Polymorphism", animals);

// Gọi makeSound() của từng con vật
animals.forEach((a) => a.makeSound());