export class Car {
    constructor(
        public brand: string,
        public model: string,
        public year: number
    ) {}

    showInfo(): void {
        console.log(`Car: ${this.brand} | ${this.model} | (${this.year})`);
    }
}

const car = new Car("Toyota", "Camry", 2023);
 car.showInfo();