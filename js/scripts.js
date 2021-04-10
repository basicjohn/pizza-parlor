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
    return
  } else if (this.size === "Large") {
    this.price += 4.99;
    return
  } else if (this.size === "Extra Large") {
    this.price += 6.99;
    return
  } else {
    return
  }
}
Pizza.prototype.addCheese = function (cheese) {
  this.cheeses.push(cheese);
  this.price += .99;
}
Pizza.prototype.addVeggie = function (veggie) {
  this.veggies.push(veggie);
  this.price += 1.49;
}
Pizza.prototype.addMeat = function (meat) {
  this.meats.push(meat);
  this.price += 1.99;
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
    var template = document.querySelector('#pizza-item-output');
    var orderOutput = document.querySelector("#order-output");
    $("#subtotal-output").empty();
    $("#tax-output").empty();
    $("#total-output").empty();
    const pizzaSizeInput = $('input.pizza-size:checked').val();
    const newPizza = new Pizza(pizzaSizeInput)
    // Functions to insert selection form ingredients in pizza object
    function getCheeses() {
      let cheeses = $('input.cheeses:checked').map(function(index, element) {
        let currentCheese = $(element).val()
        newPizza.addCheese(currentCheese);
      }).get();
    };
    function getMeats() {
      let cheeses = $('input.meats:checked').map(function(index, element) {
        let currentMeat = $(element).val()
        newPizza.addMeat(currentMeat);
      }).get();
    };
    function getVeggies() {
      let veggies = $('input.veggies:checked').map(function(index, element) {
        let currentVeggie = $(element).val()
        newPizza.addVeggie(currentVeggie);
      }).get();
    };
    // Functions to print ingredients to the DOM
    function printCheeses(cheeses) {
      cheeses.forEach(element => {
        $(".cheeses-output:first-of-type").append("<li class='cheese'/>" + element);
      });
    };
    function printMeats(meats) {
      meats.forEach(element => {
        $(".meats-output:nth-of-type(2)").append("<li class='meat'/>" + element);
      });
    };
    function printVeggies(veggies) {
      veggies.forEach(element => {
        $(".veggies-output:nth-of-type(3)").append("<li class='veggie'/>" + element);
      });
    };
    // Creating new Pizza object & storing ingredents in object
    const pizzaName = pizzaSizeInput + itemCount;
    newPizza.addSize(pizzaName);
    getCheeses();
    getMeats();
    getVeggies();
    // Adding Pizza object to order and calculating order totals
    order.addPizza(newPizza);
    order.calcSubTotal(order.pizzas);
    order.calcTax(order.subTotal)
    order.calcTotal(order.total)
    // Printing everything to the #order-summary section
    var clone = template.content.cloneNode(true);
    orderOutput.prepend(clone);
    $("h4:first-of-type .size-output").text(pizzaSizeInput);
    printCheeses(order.pizzas[itemCount].cheeses);
    printMeats(order.pizzas[itemCount].meats);
    printVeggies(order.pizzas[itemCount].veggies);
    $("#subtotal-output").append(order.subTotal.toFixed(2));
    $("#tax-output").append(order.taxes.toFixed(2));
    $("#total-output").append(order.total);
    itemCount ++;
  });
});