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
console.log(functionality);
functionality.beep();

//  Example 7
// Builtin method in Object
// Object.keys()
// Object.entries()
// Object.assign()

const myClothColors = {
  cloth1: "red and white",
  cloth2: "White and black",
  cloth3: "Plain Blue",
};

let clothKeys = Object.keys(myClothColors);
console.log(clothKeys)