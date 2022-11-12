let hasPermission = true;
if (!hasPermission) {
  console.log("Student can post and commment");
} else {
  console.log("Student can only coment");
}

console.log("EXAMPLE2");

let mySecondName = "Morufudeen";

if (mySecondName.length > 10) {
  console.log("this is not my second name");
} else if (mySecondName.length <= 10) {
  console.log("this is my second name");
} else {
  console.log("What is your second name lenght");
}

console.log("EXAMPLE3");
const mySchoolName = "LAUTECH";
if (mySchoolName.length !== 7) {
  console.log("You didn't know my school");
} else {
  console.log("You know my school");
}

console.log("EXAMPLE3");
let moonPhase = "Mostly full";
if (moonPhase === "full") {
  console.log("I swear am not a werewoft");
} else if (moonPhase === "Mostly full") {
  console.log("Arms and legs are getting hairier");
} else if (moonPhase === "Mostly full") {
  console.log("Back on two feet");
} else {
  console.log("Invalid Moon Phase");
}

/**
 * Using let, create a variable named hungerLevel and set it equal to 7.

2.
Write an if...else statement using a comparison operator. The condition should check if hungerLevel is greater than 7. If so, the conditional statement should log, 'Time to eat!'. Otherwise, it should log 'We can eat later!'.

After you press run, play around with the condition by tweaking the comparison of hungerLevel by using different operators such as <=,>=,>, and <.

The syntax for an if...else statement is:

if (condition) {
  // Execute this code
} else {
  // Execute this code
}
 */

console.log("Logical and");

let day = "Monday";
let isGoingToWork = true;
if (day === "Monday" && isGoingToWork) {
  console.log("Yes, I should at my workplace");
} else {
  console.log("I should work remotely");
}

console.log("Logical Or");

let todo = "Observe my solat";
let observeCharity = true;
if (todo || !observeCharity) {
  console.log("Yes, Charity is voluntary");
} else {
  console.log("I can do both as well");
}

/** EXAMINATION GRADE */
// EXAM GRADE
let examTotalAvailableScore = 100;
let studentScore = Math.random() * examTotalAvailableScore;
console.log('studentScore', studentScore);
let examScore = Math.floor(studentScore);
console.log('examScore', examScore);

if(examScore <= 100 && examScore >= 75){
 console.log('You scored grade A')
}
else if(examScore <= 74 && examScore >= 65){
  console.log('You scored grade B')
}
else if(examScore <= 64 && examScore >= 55){
  console.log('You scored grade C')
}
else if(examScore <= 54 && examScore >= 45){
  console.log('You scored grade D')
}
else if(examScore <= 44 && examScore >= 35){
  console.log('You scored grade E')
}
else if(examScore <= 34 && examScore >= 25){
  console.log('You scored grade F')
}
else{
  console.log('You scored 0')
}