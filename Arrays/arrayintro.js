/**
 * Arrays is a collection of items
 * Arrays can created using square bracket
 */
const myGroceries = [];

/**
 * creating an array
 */
let favoriteFood = ["rice", "dodo", "bread", "bean", "yam", "noodles"];
// accessing items in an array
let getItem = favoriteFood[1];
console.log(getItem);
let getYam = favoriteFood[4];
console.log(getYam);

const mixedData = [1, "hello", true, "6666", 1.4444];

/**
 * length of items in array
 * .length
 */
const getItemCount = favoriteFood.length;
console.log(getItemCount);

/**
 * updating item in an array
 */
favoriteFood[0] = "Eba";
favoriteFood[2] = "Vegetable";
favoriteFood[3] = "Porridge";

console.log(favoriteFood);
