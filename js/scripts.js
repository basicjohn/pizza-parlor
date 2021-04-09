// Business Logic
function Pizza() {
  this.size = "";
  this.cheeses = [];
  this.veggies = [];
  this.meats = [];
  this.notes = "";
}

Pizza.prototype.addSize = function (size) {
 this.size = size;
}

Pizza.prototype.addCheese = function (cheese) {

}

Pizza.prototype.addMeat = function (meat) {

}



Pizza.prototype.addVeggies = function (veggie) {

}



const pizza1 = new Pizza();


// UI Logic