let greeting = (name) => console.log(`Good morning to ${name.toUpperCase()}`);
greeting("Alimi");

let areaOfCircle = (radius) => {
  console.log(Math.floor(Math.PI * radius * radius));
};
areaOfCircle(3);


const add = (a, b) => a + b;
console.log('add = ', add(2, 3));

const subtract = (x, y) => x - y;
console.log('subtract = ', subtract(10, 6));

const divide = (s, t) => s / t;
console.log('divide = ', divide(20, 5))

const multiply = (q, r) => q * r;
console.log('multiply = ', multiply(7, 9));