import { Person } from "./exercise01";

export class Student extends Person {
    constructor(
        name: string,
        age: number,
        public grade: number
    ) {
        super(name, age);
    }

    displayAllInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

const student = new Student("Cao Quốc Trung", 20, 8.5);

student.displayAllInfo();