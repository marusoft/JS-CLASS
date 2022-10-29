# Data Types
Data types are the classifications of different kinds of data that we use in programming. In JavaScript, there are seven fundamental data types: Number, String, Boolean, Null, Undefined, Sysmbol data types are considered primitive data types while others like Object is an example of Complex data type.

### String
```javascript
Any Character surrounded by either single or double quote, Example "hello js", '1040'
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
### Null Data types
```javascript
null represent an empty value or data
var myname = null;
```
### Undefined Data types
```javascript
undefined represent a container or varibale that has not been assigned a value
var myname;
```
### Symbol
```javascript
Symbols are unique identifiers, 
```
### Object Data types
```javascript
Collections of related data.
var myProfile = {
  name: "alimi",
  age: 23,
  classYear: "200L",
  location: "Lagos, Nigeria"
};
```
# Arithmetics Operators
```javascript
Addition Operator: +
Subtract Operator: -
Multiply Operator: *
Divide Operator: / 
Modulo or Remainder operator: %
The modulo operator when placed between two numbers return their remainder.
Example 15 % 4 equals 3
```
# Incremetal and Decremental Operators
```javascript
Incremental Operator: +=
let s = 15
example: s++ 
Decremental Operator: -=
let t = 8
example: t--
```
# String Concatenation
```javascript
When a + operator is used on two strings, it appends the right string to the left string:
console.log("I can't to start learning " + "JavaScript")
```

## Inbuilt Methods in JS
[Learn more about Inbuilt string method on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype)
```javascript
.length return the length(number of character) of string 
.toUpperCase()
.toLowerCase()
.startWith()
```

# Variable
It is container of related item.
```javascript
camelcasing
let variableName = variableValue;
const variable2Name = variableValue;


let x = 10;
let y = 15;
const answer = x + y;
console.log(answer);

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

# Conditionals (Decision making in JavaScript)
```javascript
if, else if, and else statements.
Example: two decision
if(statement){
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
else{
 console.log("make whatever you like")
}
Note: statement is the condition to make our decision

```