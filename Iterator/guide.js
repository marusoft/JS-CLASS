
// .forEach()
// .map()
// .filter()
// .reduce()
// .find()
// .every()
// .some()

/**
 * .forEach()
 */
const myFriends = ["alimi", "muhammed", "musa"];
myFriends.forEach((friend) => console.log(`${friend} is one of my friend`));

/**
 * .map()
 * executes the same code on every element in an array and returns a new 
 * array with the updated elements.
 */

const myFavoriteNumbers = [1, 2, 3, 4, 5, 6];
myFavoriteNumbers.map((number) => console.log(number * 2))

/**
 * .filter() Returns the elements of an array that meet the condition 
 * specified in a callback function.
 */
const studentScore = [80, 70, 40, 45, 33, 88, 72, 78];
let scoreGreaterFifty = studentScore.filter((score) => score > 50);
console.log("scoreGreaterFifty", scoreGreaterFifty);

/**
 * .reduce() A function that accepts up to four arguments. The reduce method calls the callbackfn function one 
 * time for each element in the array.
 */

const num = [2, 7, 8, 9, 11, 12]; // 49
const total = num.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log("total", total);

// classwork 
const profile = [
  {
    id: 1,
    name: 'jafar',
    age: 52,
    school: 'lasu',
    country: 'nig'
    
  },
  {
    id: 2,
    name: 'alimi',
    age: 15,
    school: 'marusoft',
    country: 'nig'
    
  },
  {
    id: 3,
    name: 'marusoft',
    age: 20,
    school: 'lautech',
    country: 'nig' 
  }
];
// todo filter by age > 15 name === jafar