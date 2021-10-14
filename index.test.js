const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  let input
  beforeEach(() => {
     input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  })
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    utils.trimProperties(input)
    expect(input).toEqual(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  let input
  beforeEach(() => {
     input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  })
  test('[3] returns an object with the properties trimmed', () => {
    const actual = utils.trimPropertiesMutation(input)
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const expected = utils.trimPropertiesMutation(input)
    expect(input).toEqual(expected)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  let input
  beforeEach(() => {
    input = [{ integer: 20 }, { integer: 3 }, { integer: -81 }]
  })
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const actual = utils.findLargestInteger(input)
    const expected = 20
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toEqual(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    const initialCount = counter.countDown()
    expect(counter.countDown()).toEqual(initialCount - 1)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    const zero = counter.countDown()
    expect(zero).toEqual(0)
    expect(counter.countDown()).not.toBeLessThan(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    expect(seasons.next()).toEqual('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.next()).toEqual('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toEqual('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toEqual('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }
    expect(seasons.next()).toEqual('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(30)
    expect(focus.drive(20)).toEqual(50)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(30)
    expect(focus.drive(20)).toEqual(50)
    expect(focus.fuel).toBe(18)
    expect(focus.drive(600)).toContain('Ran out of gas')
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    focus.refuel(3)
    expect(focus.fuel).toEqual(3)
    focus.refuel(10)
    expect(focus.fuel).toEqual(13)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(1)
    expect(focus.fuel).toEqual(focus.tank)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
})
