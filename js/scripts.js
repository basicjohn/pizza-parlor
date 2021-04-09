// Business Logic
function Pizza(name) {
  this.size = name;
  this.cheeses = [];
  this.veggies = [];
  this.meats = [];
  this.notes = "";
  this.price = 11.99;
}

Pizza.prototype.addSize = function (size) {
  this.size = size;
  if (this.size === "Medium") {
    this.price += 2.99;
    return console.log("Medium Pizza + $2.99")
  } else if (this.size === "Large") {
    this.price += 4.99;
    return console.log("Large Pizza + $4.99")
  } else if (this.size === "Extra Large") {
    this.price += 6.99;
    return console.log("Extra Large Pizza + $6.99")
  } else {
    return console.log("Small Pizza + $0")
  }
}

Pizza.prototype.addCheese = function (cheese) {
  this.cheeses.push(cheese);
  this.price += .99;
  return console.log(cheese + " + $0.99")
}

Pizza.prototype.addVeggie = function (veggie) {
  this.veggies.push(veggie);
  this.price += 1.49;
  return console.log(veggie + " + $1.49")
}

Pizza.prototype.addMeat = function (meat) {
  this.meats.push(meat);
  this.price += 1.99;
  return console.log(meat + " + $1.99")
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

const order = new Order();


// UI Logic
$(document).ready(function () {
  let itemCount = 0;
  $('form').submit(function (event) {
    event.preventDefault();
    const pizzaSizeInput = $('input.pizza-size:checked').val();
    const newPizza = new Pizza(pizzaSizeInput)

    function getCheeses() {
      console.log($('input.cheeses:checked').val());
      let cheeses = $('input.cheeses:checked').map(function(index, element) {
        let currentCheese = $(element).val()
        newPizza.addCheese(currentCheese);
      }).get();
    };

    function getMeats() {
      console.log($('input.meats:checked').val());
      let cheeses = $('input.meats:checked').map(function(index, element) {
        let currentMeat = $(element).val()
        newPizza.addMeat(currentMeat);
      }).get();
    };

    function getVeggies() {
      console.log($('input.veggies:checked').val());
      let veggies = $('input.veggies:checked').map(function(index, element) {
        let currentVeggie = $(element).val()
        newPizza.addVeggie(currentVeggie);
      }).get();
    };

  //   function printPizzaOrder () {


      
  //     for (var i = 0; i < order.pizzaz[i].cheeses.length; i++) {
        
  //       if (order.pizzaz[i].hasOwnProperty(key)) {
  //           console.log(key + " -> " + p[key]);
  //           $("#listOutput").append("<li>"  + element + "</li>");

  //       }
  //   }
  //   }
  //   for (var key of Object.keys(newObject)) {
  //     console.log(key + " -> " + p[key])
  // }
    newPizza

    newPizza.addSize(pizzaSizeInput);
    getCheeses();
    getMeats();
    getVeggies();
    order.addPizza(newPizza);
    order.calcSubTotal(order.pizzas);
    order.calcTax(order.subTotal)
    order.calcTotal(order.total)
    itemCount ++;
  });
});