/**
 * EXAMPLE 1
 */
console.log("EXAMPLE 1");
let isPlayingFootball = true;

if (!isPlayingFootball) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/**
 * EXAMPLE 2
 */
console.log("EXAMPLE 2");
const isRaining = false;
let isUmbrellaAvailable = true;

if (isRaining || isUmbrellaAvailable) {
  console.log("I am going to school today");
} else {
  console.log("I am not going to school today");
}

/**
 * EXAMPLE 3
 */
console.log("EXAMPLE 3");

let hasPermission = true;
let isRegistered = true;

if (hasPermission && isRegistered) {
  console.log("I will write the pertake in the mathematics competition");
} else {
  console.log("Access denied");
}

/**
 * EXAMPLE 4
 */

let greetings = false;

if (greetings) {
  console.log("You are allowed");
} else if (!greetings) {
  console.log("Access denied");
} else {
  console.log("Go away");
}

/**
 * Class work
 * Create two variables, named mood and weakLevel. Assigned mood to happy and weakLevel to 7.
 * Make a conditional statement with variables. For the first code block, print out "I am very weak" else " I need to work"
 */

const mood = "happy";
const weakLevel = 7;

if (mood || weakLevel > 7) {
  console.log("I am very weak");
} else {
  console.log("I need to work");
}
