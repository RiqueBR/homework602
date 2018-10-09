const Park = function(name, ticket_price, dino_collection){
  this.name = name;
  this.ticket_price = ticket_price;
  this.dino_collection = []
}

module.exports = Park;


Park.prototype.numberOfDinosaurs = function () {
  return this.dino_collection.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  return this.dino_collection.push(dinosaur)
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const indexOfDinosaur = this.dino_collection.indexOf(dinosaur)
  this.dino_collection.splice(1, indexOfDinosaur)
};

Park.prototype.most_visited = function () {
  let highest_number = this.dino_collection[0]
  for( let dinosaur of this.dino_collection){
    if (dinosaur.visitor_average > highest_number.visitor_average)
    highest_number = dinosaur
  }
  return highest_number
};


Park.prototype.find_by_species = function (species) {
  for(let dinosaur of this.dino_collection){
    if (dinosaur.species === species)
    return dinosaur
  }
};

Park.prototype.visitsPerDay = function () {
  let visitsToday = 0
  for (let dinosaur of this.dino_collection){
    visitsToday += dinosaur.visitor_average
  }
  return visitsToday
};

// Park.prototype.visitsPerYear = function () {
//   let visitsToday = 0
//   for (let dinosaur of this.dino_collection){
//     visitsToday += dinosaur.visitor_average
//   }
//   visitsPerDay = visitsToday * 365
//   return visitsPerYear
// };
