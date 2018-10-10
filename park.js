const Park = function(name, ticket_price, dino_collection){
  this.name = name;
  this.ticket_price = ticket_price;
  this.dino_collection = []
}

// Here the empty array doesn't need to be added as a place holder because it's just
// an empty array.


module.exports = Park;


Park.prototype.numberOfDinosaurs = function () {
  return this.dino_collection.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  return this.dino_collection.push(dinosaur)
};

Park.prototype.removeDinosaur = function (dinosaur) {
  let indexOfDinosaur = this.dino_collection.indexOf(dinosaur)
  this.dino_collection.splice(1, indexOfDinosaur)
};

Park.prototype.most_visited = function () {
  // declare a highest variable
  // loop through all dinosaur
  // compare current dino to highest, replace highest if higher
  // return highest.

  let highest_number = this.dino_collection[0]
  for( let dinosaur of this.dino_collection){
    if (dinosaur.visitor_average > highest_number.visitor_average)
    highest_number = dinosaur
  }
  return highest_number
};


Park.prototype.find_by_species = function (species) {
  // declare an array of filtered dinos
  let filtered_dinos = []
  // loop through all dinos
  for(let currentDinosaur of this.dino_collection){
    // if species === species to find, add to array
    if(currentDinosaur.species.toLowerCase() === species.toLowerCase()){
      filtered_dinos.push(currentDinosaur)
    }
  }
  return filtered_dinos
}

Park.prototype.visitsPerDay = function () {
  let visitsToday = 0
  for (let dinosaur of this.dino_collection){
    visitsToday += dinosaur.visitor_average
  }
  return visitsToday
};

Park.prototype.visitsPerYear = function () {
  return this.visitsPerDay() * 365;
}


Park.prototype.getYearlyIncome = function () {
  return this.ticket_price * this.visitsPerYear()
};


Park.prototype.kill_all = function (species) {
  for(let i = this.dino_collection.length - 1; i >= 0; i--){

  }
};
