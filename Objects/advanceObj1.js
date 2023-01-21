// Example 1
const myCar = {
  manufacture: "Toyota",
  color: "Blue",
  carSound() {
    return "Vroom";
  },
  carHorn(manufacture) {
    return `My ${this.manufacture} car is making PIN PIN`;
  },
};
const getSound = myCar.carSound();
console.log(getSound);
console.log(myCar.carHorn());
// Exampl 2
const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(`${this.dietType} is the diet of a goat`);
  },
};
goat.diet();

//  Example 3
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};
console.log(robot.provideInfo());

//  Example 4 Destructuring of Object
const myDetails = {
  firstName: "Kehinde",
  lastName: "Alimi",
  "matric number": 0011445,
  department: "Physics",
};
// const { propertyToAccess1, propertyToAccess2 } = ObjectName
const { firstName, department } = myDetails;
console.log(firstName);
console.log(`My name is ${firstName} and I am in department of ${department}`);

//  Example 5

const myHouse = {
  houseNumber: 3,
  houseAddress: "Lagos",
};
let { houseNumber, houseAddress } = myHouse;
console.log(houseNumber);
console.log(houseAddress);

//  Example 6

const robotDeatails = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop");
    },
    fireLaser() {
      console.log("Pew Pew");
    },
  },
};
// TODO get the functionality by using destructring method to printout "Beep Beep"

const { functionality } = robotDeatails;
functionality.beep();
console.log(functionality);

//  Example 7
// Builtin method in Object
// Object.keys() Returns the names of the enumerable string properties and methods of an object.
// Object.entries() Returns an array of key/values of the enumerable properties of an object
// Object.assign(target, source) Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// Object.freeze() Prevents the modification of existing property attributes and values, and prevents the addition of new properties. @param a — Object on which to lock the attributes.

const myClothColors = {
  cloth1: "red and white",
  cloth2: "White and black",
  cloth3: "Plain Blue",
};
const myNeed = {
  water: true,
  food: "Yes",
  soap: "Dove",
  drink: "Yoghourt"
}

let clothKeys = Object.keys(myClothColors);
let objEntries = Object.entries(myClothColors);
let objAssign = Object.assign(myNeed, myClothColors);
let freezeObj = Object.freeze(myClothColors);
console.log(clothKeys);
console.log(objEntries);
console.log(objAssign);
console.log(freezeObj);