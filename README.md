# Steve's Pizza Place

#### _This is the Epicodus Pizza Parlor Project created by John Edmondson_

### Week 4 Project for the March 2021 Co-hort session: Arrays and Looping Independent Project

#### By _**John Edmondson**_

### Git Pages Link

[Steve's Pizza Place (GitHub Pages)](http://basicjohn.github.io/pizza-parlor)

## Technologies Used

- HTML
- CSS
- Bootstrap CSS Framework
- Google Fonts
- Git
- VS Code
- Javascript
- Jquery

## Description

\_ This web page is meant to take an input by the user and then output the selected pizza information to make the desired pizza. \_

## Setup/Installation Requirements

- Clone the repository to your desktop.
- Navigate to the top level of the directory.
- Open index.html in you web browser.

## Specifications

Describe: Pizza()
Test: create a pizza with empty keys and a key with the base price
Code:
const pizza1 = new Pizza();
pizza1
Expected Output:
Pizza {
size: "" ,
cheeses: [],
veggies: [],
meats: [],
price: 12
} 

Describe: pizza.prototype.addSize()
Test:
Code: Pizza.addSize("Large");
Expected Output:
Pizza {
size: "Large",
cheeses: [],
veggies: [],
meats: []
price: 12
}

Describe: pizza.prototype.addCheese()
Test: 
Code: Pizza.addCheese("Mozzarella");
Expected Output: Pizza {
size: "Large",
cheeses: ["Mozzarella"],
veggies: [],
meats: []
price: 12
}

Describe: pizza.prototype.addVeggies()
Test: 
Code: Pizza.addVeggies("Bell Peppers");
Expected Output: Pizza {
size: "Large",
cheeses: ["Mozzarella"],
veggies: ["Bell Peppers"],
meats: []
}

Describe: pizza.prototype.addMeats()
Test: 
Code: Pizza.addCheese("Sausage");
Expected Output: Pizza {
size: "Large",
cheeses: ["Mozzarella"],
veggies: [],
meats: ["Sausage"]
}

Describe: order()
Test:
Code:
Expected Output:

\Describe: order.prototype.pizzas()\
\Test:\
\Code:\
\Expected Output:\

\Describe: order.prototype.calculateTotal()\
\Test:\
\Code:\
\Expected Output:\

## Known Bugs

- \_ \_

## License

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."_

## Contact Information

John Edmondson edmondsonj@gmail.com
