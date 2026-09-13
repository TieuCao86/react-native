import { displayResult } from "./display";

// Class Appliance là class trừu tượng, dùng làm class cha cho các thiết bị
export abstract class Appliance {

    // Khởi tạo thương hiệu và công suất của thiết bị
    constructor(public brand: string, public powerWatts: number) {}

    // Phương thức abstract yêu cầu class con phải định nghĩa turnOn()
    abstract turnOn(): void;
}

// Fan kế thừa từ Appliance
export class Fan extends Appliance {

    turnOn(): void { // Định nghĩa cách bật của quạt
        console.log("Fan is spinning.");
    }
}

// AirConditioner kế thừa từ Appliance
export class AirConditioner extends Appliance {

    turnOn(): void { // Định nghĩa cách bật của máy lạnh
        console.log("Air Conditioner is cooling.");
    }
}

const fan = new Fan("Panasonic", 45); // Tạo một chiếc quạt Panasonic có công suất 45W

const ac = new AirConditioner("Daikin", 1500); // Tạo một máy lạnh Daikin có công suất 1500W

displayResult("Bài 24: Appliances Collection", [fan, ac]); // Hiển thị danh sách các thiết bị

fan.turnOn(); // Gọi phương thức bật quạt

ac.turnOn(); // Gọi phương thức bật máy lạnh