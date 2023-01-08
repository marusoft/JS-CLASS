
const myCar = {
  manufacture: "Toyota",
  color: "Blue",
  carSound(){
    return 'Vroom'
  },
  carHorn(manufacture){
    return `My ${this.manufacture} car is making PIN PIN`
  }

}
const getSound = myCar.carSound();
console.log(getSound)
console.log(myCar.carHorn())

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(`${this.dietType} is the diet of a goat`);
  }
};
goat.diet()