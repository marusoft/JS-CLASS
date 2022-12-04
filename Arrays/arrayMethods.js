// .shift()
// .unshift()
// .splice()
// .find()
// .pop()

const myFriend = [
  "alimi",
  "mubarak",
  "muhammed",
  "hamzah",
  "abdulAfeez",
  "khalid",
  "basheerah",
];
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
let addItemAtTheStart = myFriend.unshift("alimi");
console.log(myFriend);

/**
 * .slice() Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
 * @param start
The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

@param end
The end index of the specified portion of the array. This is exclusive of the element at the index 'e
 */
let sliceArray = myFriend.slice(1, 3);
let sliceAnotherFriend = myFriend.slice(4, 6);
let getLastElement = myFriend.slice(-3);
console.log(sliceArray);
console.log(sliceAnotherFriend);
console.log(getLastElement);

/**
 * .splice()
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.

@returns — An array containing the elements that were deleted.
 */
let spliceArray = myFriend.splice(0, 5);
console.log("splice", spliceArray);
console.log(myFriend);

/**
 * .includes()
 * includes(searchElement: string, fromIndex?: number | undefined): boolean
The element to search for.


Determines whether an array includes a certain element, returning true or false as appropriate.
@param searchElement — The element to search for.

@param fromIndex — The position in this array at which to begin searching for searchElement.
 */
const myFriendOne = [
  "alimi",
  "mubarak",
  "muhammed",
  "hamzah",
  "abdulAfeez",
  "khalid",
  "basheerah",
];
let includeElement = myFriendOne.includes('hamzah', 0)
let includeElementNotFound = myFriendOne.includes('kemi', 0);
console.log(includeElement)
console.log(includeElementNotFound);