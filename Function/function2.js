// function myFun(params) {
//   // function body
// }
// myFun(argmument);

// Example 1 FUNCTION DECLARATION
function calculatePerimeterOfRectangle(length, breath) {
  return length + length + breath + breath;
}
console.log("Perimeter Of Rectangle =", calculatePerimeterOfRectangle(4, 5));

// Example 2
function calculateVolumeOfASphere(r) {
  return (4 / 3) * Math.PI * r * r * r;
}
console.log(Math.round(calculateVolumeOfASphere(3)));

// Example 3 FUNCTION EXPRESSION

const myInfo = function () {
  let myName = "Oladimeji";
  myName.length % 2 === 3
    ? console.log("I have many characters in my name")
    : console.log("I have few characters in my name");
};
myInfo();

// Example 5 ARROW FUNCTION

let areaOfCircle = (r) => Math.PI * r * r;
console.log(areaOfCircle(2));

// Example 6

let addition = (a, b) => a + b;
let additionResult = addition(3, 6);
console.log(additionResult);