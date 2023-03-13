## JavaScript Programming
JavaScript is a programming language for making an application interactive and dynamic.
JavaScript is primarily known as the language of most modern web browsers,
## Data Types
Data types are the classifications of different kinds of data that we use in programming. In JavaScript, there are seven fundamental data types in Javascript: 

* String
* Number
* Boolean 
* Null 
* Undefined 
* Sysmbol 
* Object 
   
The first six data types are considered primitive data types while others like Object is an example of Complex data type.

### String
```javascript
Any Character surrounded by either single or double quote, 
Example "hello js", '1040'
console.log("I am learning js");
console.log("20");
```

### Number
```javascript
Any number like 5, 2.5, 5678
console.log(23);
console.log(55);
```
### Boolean
```javascript
Boolean data type is either true or false
console.log(true);
console.log(false);
```
### Null
```javascript
null represent an empty value or data
```
### Undefined
```javascript
undefined represent a container or varibale that has not been assigned a value
```
### Symbol
```javascript
Symbols are unique identifiers, 
```
### Object
```javascript
Collections of related data or items.
var myProfile = {
  name: "alimi",
  age: 23,
  classYear: "2022",
  location: "Lagos, Nigeria"
};
```
### Arithmetics Operators
```javascript
Addition Operator: +
Subtract Operator: -
Multiply Operator: *
Divide Operator: / 
Modulo or Remainder operator: %
The modulo operator when placed between two numbers return their remainder.
Example 15 % 4 equals 3
```
### Incremetal and Decremental Operators
```javascript
Incremental Operator: +=
let s = 15
example: s++ means s will increase by 1
Decremental Operator: -=
let t = 8
example: t-- means t will decrease by 1
```
### String Concatenation
```javascript
When a + operator is used on two strings, it appends the right string to the left string:
console.log("I cannot wait to start learning " + "JavaScript")
output: I cannot wait to start learning JavaScript
In es6
let firstSetence = "I am enjoying my JS classes";
let secondSentence = "with Marusoft Technology";
let paragraph = `${firstSetence}${secondSentence}`
console.log(paragraph);
output: I am enjoying my JS classes with Marusoft Technology
```

### Inbuilt Methods in JS
[Learn more about Inbuilt string method on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype)
```javascript
.length return the length(number of character) of string 
.toUpperCase()
.toLowerCase()
.startWith()
```

### Variable
It is a container of related item.

```javascript
camelcasing
let variableName = variableValue;
const variable2Name = variableValue;


let x = 10;
let y = 15;
const answer = x + y;
console.log(answer); // 25

let firtsName = "Kehinde ";
let lastName = "Alimi";
let fullName = firtsName + lastName;
console.log("FNAME1", fullName)

In ES6, template literals use backticks `` and ${} to interpolate values into a string.
let firstName1 = "Kehinde";
let lastName1 = "Alimi";
let fullName2 = `${firstName1} ${lastName1}`;
console.log("FNAME2", fullName2)
```
### Comparison Operators
```javascript
Comparison operators compare the value on the left with the value on the right.
Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Strict equal to: ===
Is NOT equal to: !==
```
### Logical Operators
```javascript
the and operator (&&)
the or operator (||)
the not operator (!)
When we use the && operator, we are checking that two things are true:
When we use the || operator, we are checking that either thing are true:

NOTE: When using the && operator, both conditions must evaluate to true for the entire condition to evaluate to true and execute. Otherwise, if either condition is false, the && condition will evaluate to false and the else block will execute.
When using the || operator, only one of the conditions must evaluate to true for the overall statement to evaluate to true.
The ! not operator reverses, or negates, the value of a boolean:
```

### Conditionals (Decision making in JavaScript)
```javascript
if, else if, and else statements.
Example: two decision
if(statement) {
  console.log("make something  happen");
} 
else {
   console.log("make another thing happen");
}

Example: multiple decision
if(statement){
   console.log("make something happen");
} 
else if(!statement) {
   console.log("make another thing happen");
}
else  {
 console.log("make whatever you like")
}
Note: statement is the condition to make our decision

switch Statement

A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:

switch (key) {
  case value:
    
    break;

  default:
    break;
}

Tenary Operator
condition ? "do something" : "do another thing";

alimi.length === 5 ? "hello alimi" : "no greetings";
```

### Function
A function is a reusable block of code that combines some programming logic to  perform a specific task.
```javascript
Function Declaration
function functionName() {
  // function body
}
```
```javascript
Calling a function or Invoking a function: This is done by writing the function name followed by parentheses.

function functionName(param) {
  // function body
}
functionName();
```
```javascript
Parameter is a named variable expecting a value from the Argument.
The return keyword is used to return the result of the body of a function

function functionName(parameter) {
  return some statements
}
functionName(arguments)

example to calculate the area of a circle

function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}
areaOfCircle(3);
```
```javascript
Function Expression
const myFunctionName = function() {
  // function body
}
myFunctionName();
```
```javascript
Arrow Function (es6 way of declaring function)

const myFunctionName = () => {
  // function body
}
myFunctionName();
```
```javascript
Printing out the result of a function

const myFunctionName = () => {
 return some logic
}
console.log(myFunctionName());
```
### Scope in JavaScript

Scope is a concept in programming that some variables are available or unavailable from other parts of a program.

Global Scope and Local Scope
A variable available in every part of the program is called a Global Scope variable
whereas, a variable that is available within a block { } is known as Local Scope Variable.

Example of Global variable

```javascript
let firstName = "John";
let lastName = "Doe";
let middleName = "Terresa";

const myFullName = () => {
  return `My names are ${firstName.toUpperCase()}, ${lastName} ${middleName}`;
}
console.log(myFullName()) // JOHN, Doe Terresa

Which implies all the three variable are accessible in the function myFullName()
because the variables are decleared globally
```



Example of Local variable

```javascript

const welcomeMsg = () => {
  let firstName = "John";
  let lastName = "Doe";
  return `You are welcome Mr ${firstName.toUpperCase()}, ${lastName}`;
}


Which implies all the three variable are accessible in the function welcomeMsg()
because the variables are decleared locally
```



