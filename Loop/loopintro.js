// Boilerplate for "For Loop"
// for (let i = 1; i < 50; i++) {
//   const element = [i];
//   console.log(i)
// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

/**
 * incremental loop
 */
// for (let i = 1; i < 11; i++) {
//   console.log("LOOP FORWARD", i)
// }
/**
 * decremental loop
 */
// for (let a = 10; a >= 1; a--) {
//   console.log("LOOP BACKWARD", a)
// }

const semiFinalTeam = ["Argentina", "Croatia", "Morocco", "France"];
const semiFinalLength = semiFinalTeam.length;
console.log(semiFinalLength)

for (let i = 0; i < semiFinalTeam.length; i++) {
  console.log(`${semiFinalTeam[i]} is part of the team in the semi final in Qatar`);
  // console.log(semiFinalTeam[i] + " is part of the team in the semi final in Qatar");  
}