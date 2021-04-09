// Business Logic
function Pizza() {
  this.size = "Small";
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

function Order() {
  this.pizzas = [];
  this.subTotal = 0;
  this.taxes = 0;
  this.total = 0;
}

Order.prototype.addPizza = function (pizza) {
  this.pizzas.push(pizza);
  this.subTotal += pizza.total;
}

Order.prototype.calcSubTotal = function (pizzas) {
  var subTotal = 0;
  this.pizzas.forEach(function (pizza) {
    var price = pizza.price
    subTotal += price;
    console.log(subTotal);
  });
  this.subTotal = subTotal;
  return subTotal;
}

Order.prototype.calcTax = function () {
  var taxes = this.subTotal * .1;
  this.taxes = taxes;
  return taxes;
}

Order.prototype.calcTotal = function () {
  var total = this.subTotal + this.taxes;
  total = total.toFixed(2)
  this.total = total;
  return total;
}

const pizza = new Pizza();
const order = new Order();
order.addPizza(pizza);
order.calcSubTotal(order.pizzas);
order.calcTax(order.subTotal)
order.calcTotal(order.total)

// UI Logic

