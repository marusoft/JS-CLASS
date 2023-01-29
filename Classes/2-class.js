/**
 * implement a simple arithmetics which can perform addition, 
 * subtraction, multiplication, and division with oop
 */

class SimpleArithmetics {
  constructor(firstValue, secondValue){
    this._firstValue = firstValue;
    this._secondValue = secondValue;
  }
  get addition(){
    return this._firstValue + this._secondValue;
  }
  get subtraction(){
    return this._firstValue - this._secondValue;
  }
  get divison(){
    return this._firstValue / this._secondValue;
  }
  get muplication(){
    return this._firstValue * this._secondValue;
  }
}
const getOperations = new SimpleArithmetics(7, 9);
const add = getOperations.addition;
const subtract = getOperations.subtraction;
console.log(`Addition of ${getOperations._firstValue} and ${getOperations._secondValue} =`, addition)
console.log(`Subtraction of ${getOperations._firstValue} and ${getOperations._secondValue} =`, subtract)