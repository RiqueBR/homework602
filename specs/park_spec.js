const assert = require('assert')
const Dinosaur = require('../dinosaur.js')
const Park = require('../park.js')


describe("Park", function(){
  let park;
  let dinosaur1
  let dinosaur2
  let dinosaur3

  beforeEach(function(){
    park = new Park('Jurassic Park', 15, [])
    dinosaur1 = new Dinosaur('Brachiosaurus', 'Herbivore', 8)
    dinosaur2 = new Dinosaur('Stegoceratops', 'Herbivore', 20)
    dinosaur3 = new Dinosaur('Tyrannosaurus', 'Carnivore', 50)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  })

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 15)
  })

  it('should have a dino_collection', function(){
    const actual = park.dino_collection
    assert.deepStrictEqual(actual, [])
  })

  it('should have dinosaurs', function(){
    const actual = park.numberOfDinosaurs();
    assert.deepStrictEqual(actual, 0)
  })

  it('should add a dinosaur to its collection of dinosaurs', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1)
  })

  it('should remove a dinosaur', function(){
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur3);
    assert.deepStrictEqual(park.dino_collection, [dinosaur2])
  })

  it('Find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.most_visited();
    assert.strictEqual(actual, dinosaur3)
  })

  it('Find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.find_by_species('Brachiosaurus');
    assert.deepStrictEqual(actual, [dinosaur1])
  })

  it('Calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.visitsPerDay()
    assert.strictEqual(actual, 78)
  })

  it('Calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.visitsPerYear()
    assert.strictEqual(actual, 28470)
  })

  xit('Calculate the total revenue from ticket sales for one year', function(){

  })

  xit('Remove all dinosaurs of a particular species', function(){

  })

  xit('get an object with diet types and the number of dinos with that type of diet', function(){

  })
})
