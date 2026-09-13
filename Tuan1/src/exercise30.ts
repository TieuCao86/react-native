// Import class Student, Teacher và hàm displayResult
import { Student } from "./exercise02";
import { Teacher } from "./exercise27";
import { displayResult } from "./display";

// Class School dùng để quản lý giáo viên và học sinh
export class School {
    // Mảng students lưu danh sách học sinh
    public students: Student[] = [];

    // Mảng teachers lưu danh sách giáo viên
    public teachers: Teacher[] = [];

    // Thêm một học sinh vào trường
    addStudent(student: Student): void {
        this.students.push(student);
    }

    // Thêm một giáo viên vào trường
    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }
}

const school = new School(); // Tạo một đối tượng School

school.addTeacher(new Teacher("Ms. Anna", 35, "English")); // Thêm giáo viên Ms. Anna, 35 tuổi, dạy English

school.addStudent(new Student("Trung", 20, 9.0)); // Thêm học sinh Trung, 20 tuổi, điểm 9.0

school.addStudent(new Student("Linh", 19, 8.5)); // Thêm học sinh Linh, 19 tuổi, điểm 8.5

displayResult("Bài 30: School Teachers", school.teachers); // Hiển thị danh sách giáo viên

displayResult("Bài 30: School Students", school.students); // Hiển thị danh sách học sinh