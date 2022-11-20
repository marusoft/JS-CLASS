let capitalizeMyName = (name) => {
  return name.toUpperCase();
};
let nameResult = capitalizeMyName("kehinde");
console.log("nameResult", nameResult);


const tellMyNameAndAge = (oruko, age) => {
  if (oruko.length === 15) {
    return console.log(`My name is ${oruko} and my age is ${age}`);
  } else {
    return console.log("This is not my real name");
  }
};
tellMyNameAndAge("alimi kehinde m", 15);


// let areaOfCircle = r => {
//   return Math.PI * r * r;
// }
// areaOfCircle(2);

let areaOfCircle = r => {
  return Math.floor( Math.PI * r * r);
}
let area = areaOfCircle(2);
console.log(area);