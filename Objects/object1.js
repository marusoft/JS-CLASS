/**
 * Object
 */
const myProfile = {
  name: "Alimi Kehinde",
  age: 20,
  department: "physics",
  state: "Ogun",
  matric: 334455,
};

// Accessing object property using dot notation
const getName = myProfile.name;
const getMatric = myProfile.matric;
console.log(getName);
console.log(getMatric);

// Accessing object property using bracket notation
const getDepartment = myProfile["department"];
const getState = myProfile["state"];
const getAge = myProfile["age"];
console.log(getDepartment);
console.log(getState);
console.log(getAge);

// Adding new property to an object
myProfile.hobbies = ["swimming", "eating", "reading"];
myProfile.birthday = "January 3, 1992";
console.log(myProfile);

// Edit a property of an oject
const myCarInfo = {
  tramission: "manual",
  maker: "Mitsubuishi",
  mileage: 90000,
  color: "grey",
  carSound: (name) => {
    return `${name} is doing Vroom`;
  },
};
myCarInfo.color = "blue";
console.log(myCarInfo);
console.log(myCarInfo.carSound("my Toyota car"));

//  create an animal object of choice, include all atrribute of that animals
// TODO Get name, color, sound and food

const myCamel = {
  name: "Nunu",
  color: "White",
  age: 20,
  food: ["grass", "grains", "wheat", "oats"],
  myCamelSound() {
    return `${myCamel.name} is grunting`;
  },
};

let myCamelName = myCamel.name;
console.log(myCamelName);
let camelSound = myCamel.myCamelSound();
console.log(camelSound);
let myCamelFood = myCamel.food[1];
console.log(myCamelFood);

console.log("Exammple on Loop");
for (const myCamelKey in myCamel) {
  console.log(`${myCamelKey} is of the keys in myCmael Object`);
}

let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },  
};

for (const crewMember in spaceship.crew) {
  console.log(spaceship.crew[crewMember].name);
  console.log(spaceship.crew["chief officer"].agree());
  console.log(spaceship.crew.medic.announce());
}
