const assert = require('assert')
const Dinosaur = require('../dinosaur.js')

describe("Taxi", function(){

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Sauropods", "Herbivore", 10)
  })

  it('should have a species', function(){
    const actual = dinosaur.species;
    assert.strictEqual(actual, "Sauropods")
  })

  it('should have a diet', function(){
    const actual = dinosaur.diet;
    assert.strictEqual(actual, "Herbivore")
  })

  it('should have a number of visitors', function(){
    const actual = dinosaur.visitor_average;
    assert.strictEqual(actual, 10)
  })
})
