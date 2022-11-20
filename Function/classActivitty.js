function squareNum(num) {
  return num * num;
}

let squareNumber = (num) => num * num;

// let plantNeedWater = (day) => {
//   return day === 'wednesday' ? console.log("Plant need water") : console.log("Plant does not need water")
// }
// plantNeedWater("Tuesday");

let plantNeedWater = (day) =>
  day === "wednesday"
    ? console.log("Plant need water")
    : console.log("Plant does not need water");

plantNeedWater("Tuesday");

// const greaterThanFive = (word) => {
// word.length !== 5 ? console.log("Word is greater than five") : console.log("Word is not greater than five")
// }
// greaterThanFive("gdgdgdggggdggdgdgdgdggdgdg");

const greaterThanFive = (word) =>
  word.length !== 5
    ? console.log("Word is greater than five")
    : console.log("Word is not greater than five");
greaterThanFive("gdgdgdggggdggdgdgdgdggdgdg");
