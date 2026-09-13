import { displayResult } from "./display";
// Interface Animal quy định mọi Animal phải có name và phương thức sound()
export interface Animal {
    name: string;
    sound(): void;
}
// Class SampleAnimal implements Animal nên phải thực hiện đầy đủ các yêu cầu của Animal
class SampleAnimal implements Animal {
    // Khởi tạo tên của con vật
    constructor(public name: string) {}

    // Phương thức sound() dùng để in ra âm thanh của con vật
    sound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}
// Tạo đối tượng SampleAnimal với tên là Fox và gán cho biến kiểu Animal
const pet: Animal = new SampleAnimal("Fox");
// Hiển thị thông tin của pet
displayResult("Bài 9: Interface Animal", pet);
// Gọi phương thức sound() để con vật phát ra âm thanh
pet.sound();