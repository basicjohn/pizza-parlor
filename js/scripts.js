// Business Logic
function Pizza() {
  this.size = "";
  this.cheeses = [];
  this.veggies = [];
  this.meats = [];
  this.notes = "";
  this.price = 12;
}

Pizza.prototype.addSize = function (size) {
  this.size = size;
  if (this.size === "Medium") {
    this.price += 2;
    return console.log("Medium Pizza + $2")
  } else if (this.size === "Large") {
    this.price += 4;
    return console.log("Large Pizza + $4")
  } else if (this.size === "Extra Large") {
    this.price += 6;
    return console.log("Extra Large Pizza + $6")
  } else {
    return console.log("Small Pizza + $0")
  }
}

Pizza.prototype.addCheese = function (cheese) {
  this.cheeses.push(cheese);
  this.price += 1;
  return console.log(cheese + " + $1")
}

Pizza.prototype.addVeggie = function (veggie) {
  this.veggies.push(veggie);
  this.price += 1.5;
  return console.log(veggie + " + $1.50")
}

Pizza.prototype.addMeat = function (meat) {
  this.meats.push(meat);
  this.price += 2;
  return console.log(meat + " + $2")
}



const pizza1 = new Pizza();


// UI Logic