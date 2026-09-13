import { exercise01 } from "./exercise01";
import { exercise02 } from "./exercise02";
import { exercise03 } from "./exercise03";
import { exercise04 } from "./exercise04";
import { exercise05 } from "./exercise05";
import { exercise06 } from "./exercise06";
import { exercise07 } from "./exercise07";
import { exercise08 } from "./exercise08";
import { exercise09 } from "./exercise09";
import { exercise10 } from "./exercise10";

import { exercise11 } from "./exercise11";
import { exercise12 } from "./exercise12";
import { exercise13 } from "./exercise13";
import { exercise14 } from "./exercise14";
import { exercise15 } from "./exercise15";
import { exercise16 } from "./exercise16";
import { exercise17 } from "./exercise17";
import { exercise18 } from "./exercise18";
import { exercise19 } from "./exercise19";
import { exercise20 } from "./exercise20";

export const exercises = [
  {
    id: 1,
    title: "Create Promise",
    run: () => exercise01(),
  },
  {
    id: 2,
    title: "Promise Number",
    run: () => exercise02(),
  },
  {
    id: 3,
    title: "Promise Reject",
    run: () => exercise03(),
  },
  {
    id: 4,
    title: "Then / Catch",
    run: () => exercise04(),
  },
  {
    id: 5,
    title: "simulateTask",
    run: () => exercise05(2000),
  },
  {
    id: 6,
    title: "Promise.all",
    run: () => exercise06(),
  },
  {
    id: 7,
    title: "Promise.race",
    run: () => exercise07(),
  },
  {
    id: 8,
    title: "Promise Chain",
    run: () => exercise08(),
  },
  {
    id: 9,
    title: "Filter Even Numbers",
    run: () => exercise09(),
  },
  {
    id: 10,
    title: "finally",
    run: () => exercise10(),
  },
  {
    id: 11,
    title: "Async/Await",
    run: () => exercise11(),
  },
  {
    id: 12,
    title: "simulateTask Async",
    run: () => exercise12(),
  },
  {
    id: 13,
    title: "Try/Catch",
    run: () => exercise13(),
  },
  {
    id: 14,
    title: "Number × 3",
    run: () => exercise14(5),
  },
  {
    id: 15,
    title: "Sequential Async",
    run: () => exercise15(),
  },
  {
    id: 16,
    title: "Parallel Async",
    run: () => exercise16(),
  },
  {
    id: 17,
    title: "for await...of",
    run: () => exercise17(),
  },
  {
    id: 18,
    title: "fetchUser",
    run: () => exercise18(1),
  },
  {
    id: 19,
    title: "fetchUsers",
    run: () => exercise19([1, 2, 3]),
  },
  {
    id: 20,
    title: "Timeout",
    run: () => exercise20(1),
  },
];

// Chỉ cần thay đổi số ID (ví dụ: tìm bài có id = 1)
const testId = 1;
const exerciseToTest = exercises.find((ex) => ex.id === testId);

if (exerciseToTest) {
  console.log(`--- Đang test terminal: ${exerciseToTest.title} ---`);
  exerciseToTest
    .run()
    // Nếu hàm trả về dữ liệu (return), in ra kết quả
    .then((result) => {
      if (result) console.log("Kết quả:", result);
    })
    .catch((err) => console.log("Lỗi:", err));
}
