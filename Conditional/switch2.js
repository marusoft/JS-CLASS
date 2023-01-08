// let isRaining = "I am not going to school";
// switch (isRaining) {
//   case "It is not raining":
//     console.log("I can play outdoor");
//     break;
//   case "It is not raining and Sun is at 37C":
//     console.log("I can play outdoor and have some fun");
//     break;
//   case "I am not going to school":
//     console.log("Because it is raining heavily");
//     break;
//   case "It is raining":
//     console.log("I can play indoor");
//     break;
//   default:
//     console.log("I am having fun at home");
//     break;
// }

const getDaysOfWeek = new Date().getDay();
console.log(getDaysOfWeek);

switch (getDaysOfWeek) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is ThursDay");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;

  default:
    break;
}

const getPresentYear = new Date().getFullYear();

switch (getPresentYear) {
  case 2022:
    console.log("This is year 2022");
    break;
  case 2023:
    console.log("This is year 2023");
    break;
  case 2021:
    console.log("This is year 2021");
    break;
  case 2020:
    console.log("This is year 2020");
    break;
  case 2019:
    console.log("This is year 2019");
    break;
  case 2018:
    console.log("This is year 2018");
    break;

  default:
    console.log("I can't the year");
    break;
}

// Example3

let availableStudentScore = 101;
let studentScore = Math.random() * availableStudentScore;
let finalStudentScore = Math.floor(studentScore);
console.log(studentScore);
console.log(finalStudentScore);

switch (true) {
  case finalStudentScore <= 100 && finalStudentScore >= 75:
    console.log("You scored grade A");
    break;
  case finalStudentScore <= 74 && finalStudentScore >= 65:
    console.log("You scored grade B");
    break;
  case finalStudentScore <= 64 && finalStudentScore >= 55:
    console.log("You scored grade C");
    break;
  case finalStudentScore <= 54 && finalStudentScore >= 45:
    console.log("You scored grade D");
    break;
  case finalStudentScore <= 44 && finalStudentScore >= 39:
    console.log("You scored grade E");
    break;
  case finalStudentScore <= 38 && finalStudentScore >= 29:
    console.log("You scored grade E");
    break;

  default:
    console.log("You failed woefully");
    break;
}
