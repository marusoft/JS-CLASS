/**
 * Instructions
1.
Create a variable called myName and assign it your name.

In this case, you can use any keyword to declare your variable.

Here is an example of the syntax to use:

let favColor = 'blue';
2.
Create a variable called myCity and assign it your favorite city's name.

3.
Use a single template literal to interpolate your variables into the sentence below. Use console.log() to print your sentence to the console in the following format:

My name is NAME. My favorite city is CITY.
Replace NAME and CITY in the string above by interpolating the values saved to myName and myCity.

Use ES6 string interpolation as follows:

let favoriteFood = "Burritos";
console.log(`My favorite food is ${favoriteFood}.`);
 */

// using old concatenation operator +

let favoriteAnimal = 'camel';

console.log('My favorite animal:' + favoriteAnimal);

// In JavaScript ES6, backticks (`) 
// and ${} are used to interpolate
// values into a string.

let myName = 'Marusoft';
let myCity = 'Lagos';
console.log(`My name is ${myName}.My favorite city is ${myCity}.`);