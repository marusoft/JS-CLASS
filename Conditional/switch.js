// const day = new Date().getDay();
// console.log('Day', day);
// const month = new Date().getMonth();
// console.log('Month', month)
/**
 * Switch statement example 1
 */
let isGoing = "Yes, Muhammad must go to America Corner to study JS";
switch (isGoing) {
  case "Absent this week":
    console.log("Muhammed is not a serious boy");
    break;
  case "Muhammed is doubting":
    console.log("Muhammed is a bit unserious");
    break;
  case "Muhammed does not have internet":
    console.log("Muhammed is not planining properly");
    break;
  case "Yes, Muhammad must go to America Corner to study JS":
    console.log("Muhammed is doubting Linux OS");
    break;
  default:
    console.log("no plan for today");
    break;
}
/**
 * Switch statement example 2
 */
let examTotalAvailableScore = 100;
let studentScore = Math.random() * examTotalAvailableScore;
console.log("studentScore", studentScore);
let examScore = Math.floor(studentScore);
console.log("examScore", examScore);
// The expression in parentheses to be evaluated is true in this example. This means that any case that evaluates to true will be a match.
switch (true) {
  case examScore <= 100 && examScore >= 75:
    console.log("You scored grade A");
    break;
  case examScore <= 74 && examScore >= 65:
    console.log("You scored grade B");
    break;
  case examScore <= 64 && examScore >= 55:
    console.log("You scored grade C");
    break;
  case examScore <= 54 && examScore >= 45:
    console.log("You scored grade D");
    break;
  case examScore <= 44 && examScore >= 35:
    console.log("You scored grade E");
    break;
  case examScore <= 34 && examScore >= 25:
    console.log("You scored grade F");
    break;
  default:
    console.log("You failed");
    break;
}

/**
 * Example of Comparison operator
 */

console.log(2 === "2"); // false
console.log(2 == "2"); // true
console.log(2 + "4"); // 24

let myMagicNum = 1515;
let converToString = String(myMagicNum);
console.log(converToString);

let mySchool = "Ewenla Pry School";
let convertToNumber = Boolean(mySchool);
console.log(typeof convertToNumber);

/**
 * days of weeek example
 */
const date = new Date();
console.log("date", date);
const minute = new Date().getMinutes();
console.log("minute", minute);
const hour = new Date().getHours();
console.log("hour", hour);
const day = new Date().getDay();
console.log("day", day);
const month = new Date().getMonth();
console.log("month", month);
const year = new Date().getFullYear();
console.log("year", year);

const currentMonth = new Date().getMonth();
switch (currentMonth) {
  case 0:
    console.log("THe month is jan");
    break;
  case 1:
    console.log("THe month is feb");
    break;
  case 2:
    console.log("THe month is march");
    break;
  case 3:
    console.log("THe month is april");
    break;
  case 4:
    console.log("THe month is may");
    break;
  case 5:
    console.log("THe month is june");
    break;
  case 6:
    console.log("THe month is july");
    break;
  case 7:
    console.log("THe month is august");
    break;
  case 8:
    console.log("THe month is september");
    break;
  case 9:
    console.log("THe month is October");
    break;
  case 10:
    console.log("THe month is November");
    break;
  case 11:
    console.log("THe month is december");
    break;

  default:
    break;
}

