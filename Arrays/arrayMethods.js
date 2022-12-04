// .shift()
// .unshift()
// .splice()
// .find()
// .pop()

const myFriend = ['alimi', 'mubarak', 'muhammed', 'hamzah', 'abdulAfeez', 'khalid', 'basheerah'];
/**
 * .pop() remove last element of an array
 */

let removeLastItem = myFriend.pop();
console.log(removeLastItem);
console.log(myFriend);

/**
 * .push() Add  new item element to an array
 */
let addNewFriend = myFriend.push("khadijah");
let addAnotherFriend = myFriend.push("Chidi");
console.log(myFriend);

/**
 * .shift() Removes the first element from an array and returns it
 */
let removeFirstItem = myFriend.shift("alimi");
console.log(myFriend);

/**
 * .unshift() Inserts new elements at the start of an array, and returns the new length of the array.
 */
let addItemAtTheStart = myFriend.unshift("Alimi")
console.log(myFriend);