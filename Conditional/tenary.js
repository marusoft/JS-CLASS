// Example 1
let isRaining = true;

!isRaining ? console.log("No class") : console.log("There will be class");

// Example 2
let myName = "Alimi Kehinde";
console.log(myName.length);
myName.length > 40
  ? console.log("I have a long name")
  : console.log("I have short name");

// Class work
/**
 * Create a variable called my schoolName and assigned it to the name of your School, get the length of the school name
 * Use Modulus operator to divide by 5 the length then compare if greater than 10 using tenary operator
 */

const mySchoolName = "Marusoft Academy";
const schoolLength = mySchoolName.length % 6;
console.log(schoolLength);

schoolLength > 3
  ? console.log("I have many characters in my school name")
  : console.log("I have few characters in my school name");
