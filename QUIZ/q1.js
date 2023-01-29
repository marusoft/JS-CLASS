/**
 * canIVote() q1
1.
The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person's age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.

You might find a condition like this useful:

if (age >= 18)
 */
const canIVote = age => {
  if (age >= 18) {
    return "You eligible to vote";
  }
  else{
    return "You not eligible to vote";
  }
};
console.log(canIVote(2))

/**
 * q2
 * agreeOrDisagree()
1.
Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.

You might use a condition like:

if (first === second)
where first and second are your function's parameters
 */

const agreeOrDisagree = (str1, str2) => {
  if(str1 === str2){
    return 'You agree!'
  }
  else{
    return 'You disagree!';
  }
}
const compareTwoString = agreeOrDisagree("gdgdgdgdgdgd",  "gdgbzmuuududuud");
console.log(compareTwoString)

/**
 * q3
 * Write a function, lifePhase(), that takes in a person's age, as a number, and returns which phase of life they are in.

Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult' 
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'

You'll need to write multiple if statements.
 */

/**
 * q4
 * 
 * Write a function, finalGrade(). It should:

* take three arguments of type number
* find the average of those three numbers
* return the letter grade (as a string) that the average corresponds to
* return 'You have entered an invalid grade.' if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'

It's probably a good idea to check that all the grades are valid first.

if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100))
Next, you'll need to find the average of the arguments that were passed in ((midterm + final + homework)/3).

Now that you have the sum, you can write your control flow to handle returning the letter grade.


 */