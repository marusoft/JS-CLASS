/**
 * Introduction to Classes
 * An object-oriented programming (OOP) in JavaScript
 * can be used to model real-world examples
 * To create a class, we write the class keyword
 * followed by class name with the first letter
 * capitalize
 */

class Bootcamp {

}

/**
 * Constructor
 * Constructor is the method JavaScript calls every time
 * it creates a new instance of a class
 */

class Bootcamp {
  constructor(courses, duration) {
    this.courses = courses;
    this.duration = duration;
  }
}

class Signup {
  constructor(name, email, password, gender){
   this.name = name;
   this.email = email;
   this.password = password;
   this.gender = gender;
  }
}

/**
 * An Instance of a Class
 * An instance is an object that contains the
 * property names and methods of a class,
 * but with unique property values.
 * To create a instance of a class, we use the new keyword followed by classname with parentheses.
 * The new keyword calls the constructor(), runs the code
 * inside of it, and then returns the new instance.
 */

// bootcamp class
class Bootcamp {
  constructor(courses, duration) {
    this.courses = courses;
    this.duration = duration;
  }
}
const bootcampInfo = new Bootcamp("Frontend Web dev", "6 month");

// signup class
class Signup {
  constructor(name, email, password, gender){
   this.name = name;
   this.email = email;
   this.password = password;
   this.gender = gender;
  }
}
const signupValue = new Signup("Alimi","a@gmail.com", 122222, "male")

/**
 * Class Method, we are going to use
 * the get keyword with property names
 * followed by a parentheses and curly
 * brace. The property names will be
 * prepended with underscores (_courses, _duration)
 * which indicate these properties should not
 *  be accessed directly.
 */

// bootcamp example
class Bootcamp {
  constructor(courses, duration) {
    this._courses = courses;
    this._duration = duration;
    this._numberOfStudent = 6;
  }
  get courses() {
    return this._courses;
  }
  get duration() {
    return this._duration;
  }
  incrementNumberOfStudent() {
    this._numberOfStudent++;
  }
}
// login example
class Login{
  constructor(email, password, user, loggedUser){
    this.email = email;
    this.password = password;
    this._user = user;
    this._loggedUser = loggedUser;
  }
  get users(){
    return this._user
  }
  get loggedInUser(){
    return this._loggedUser
  }
}

/**
 * Calling a Method
 * We can call our new method created above
 * to access and manipulate data from
 * Bootcamp instances
 * append the instance with a period, 
 * then the property or method name followed by
 * opening and closing parentheses. 
 * illustration
 */

 class Bootcamp {
  constructor(courses, duration) {
    this._courses = courses;
    this._duration = duration;
    this._numberOfStudent = 6;
  }
  get courses() {
    return this._courses;
  }
  get duration() {
    return this._duration;
  }
  get studentTotal(){
    return this._numberOfStudent;
  }
  incrementNumberOfStudent() {
    return this._numberOfStudent++;
  }
}
const cohortOne = new Bootcamp ("FE", "12 month");
console.log(cohortOne);
console.log(cohortOne.courses);
console.log(cohortOne.duration);
cohortOne.incrementNumberOfStudent();
console.log(cohortOne.studentTotal)