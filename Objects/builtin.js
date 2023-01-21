/** Example 1
 * Object.keys() Returns the names of the enumerable string properties and methods of an object.
 * @param o — Object that contains the properties and methods. This can be an
 */

const myDepartment = {
  Dean: "Mr Ajalekoko",
  HOD: "Mr Otondo",
  advisor: "Mr Ishola",
  lecturer: ["Idowu", "Osama", "Peter", "Odundun", "Ajala"],
  callLecturer: (name) => {
    console.log(`Mr ${name} is our new Lecture`);
  },
};

const mySchool = {
  name: "LAUTECH",
  state: "Oyo",
  "Local Govt": "Ogbomosho North",
  Departments: 40
}

let myDepartmentKeys = Object.keys(myDepartment);
console.log("myDepartmentKeys", myDepartmentKeys);

/**
 * Object.entries() Returns an array of key/values of the 
 * enumerable properties of an object
 */

let myDepartmentEntries = Object.entries(myDepartment);
console.log("myDepartmentEntries", myDepartmentEntries);

/**
 * Object.assign(target, source) Copy the values of all of the enumerable own properties 
 * from one or more source objects to a target object. Returns the target object.
 */

let finalCopy = Object.assign(mySchool, myDepartment);
console.log(finalCopy);

/**
 * Object.freeze() Prevents the modification of existing property 
 * attributes and values, and prevents the addition of new properties. 
 */

const myAccount = {
  amount: 100000,
  accountName: "Tom Tom",
  acountNumber: 1234567890 
}
let currentBalance = myAccount.amount = 200000;
console.log("currentBalance", currentBalance);

const freezeAccount = Object.freeze(myAccount);
let changeName = myAccount.accountName = "Alice Alice"
console.log(freezeAccount);
// console.log(changeName)
