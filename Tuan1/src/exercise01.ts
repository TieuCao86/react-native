export class Person {
    constructor(public name: string, public age: number) {}

    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const person1 = new Person("Cao Quốc Trung", 20);

person1.displayInfo();