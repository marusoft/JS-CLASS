/**
 * Object
 */
const myProfile = {
  name: 'Alimi Kehinde',
  age: 20,
  department: 'physics',
  state: 'Ogun',
  matric: 334455
}

// Accessing object property using dot notation
const getName = myProfile.name;
const getMatric = myProfile.matric;
console.log(getName);
console.log(getMatric);

// Accessing object property using bracket notation
const getDepartment = myProfile['department'];
const getState = myProfile['state'];
const getAge = myProfile['age'];
console.log(getDepartment);
console.log(getState);
console.log(getAge)

// Adding new property to an object
myProfile.hobbies = ['swimming', 'eating', 'reading']
myProfile.birthday = 'January 3, 1992'
console.log(myProfile);

// Edit a prperty of an oject
const myCarInfo = {
  tramission: 'manual',
  maker: 'Mitsubuishi',
  mileage: 90000,
  color: 'grey'
}
myCarInfo.color = 'blue';
console.log(myCarInfo);