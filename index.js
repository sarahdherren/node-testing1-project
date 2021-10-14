
function trimProperties(obj) {
  const trimmed = {};
  Object.keys(obj).forEach(key => 
    trimmed[key] = obj[key].trim())
  return trimmed
}

function trimPropertiesMutation(obj) {
  Object.keys(obj).forEach(key => 
    obj[key] = obj[key].trim())
  return obj
}

function findLargestInteger(integers) {
  const num = integers.sort((a,b) => b.integer - a.integer)
  return num[0].integer
}

class Counter {
  constructor(initialNumber) {
    this.count = initialNumber;
  }

  countDown() {
    if(this.count === this.count.initialNumber){
      this.count --
      return this.count.initialNumber
    } else if(this.count > 0){
      return this.count --
    } return this.count
  } 
}

class Seasons {
  constructor() {
    this.seasons = ['fall', 'winter', 'spring', 'summer'];
    this.season = 2;
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    if(this.season !== 3){
      this.season++
    } else{
      this.season = 0
    } return this.seasons[this.season]
  }
}

class Car {
  constructor(name, tankSize, mpg) {
    this.name = name
    this.mpg = mpg
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    this.fuel = tankSize
  }
  
  drive(distance) {
    this.fuel = this.fuel - (distance/this.mpg).toFixed(0)
    if(this.fuel <= 0){
      return `Ran out of gas at ${this.mpg * this.tankSize}`
    } return this.odometer += distance  
  }
  
  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    const fuelUp = this.fuel + gallons
    if(fuelUp > this.tank){
      this.fuel = this.tank
    } else {
      this.fuel += gallons
    }
    return this.mpg * gallons
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
function isEvenNumberAsync(number) {
  // ✨ implement
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
