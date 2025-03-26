// 1. Basic Function
function greet() {
  console.log("wow...button Clicked!");
}
greet(); // Output: wow...button Clicked..while clicking button from index.html

// 2. Function with Parameters
function add(a, b) {
  console.log("Addition:", a + b);
}
add(5, 3); // Output: Addition: 8

// 3. Function with Return Value
function multiply(a, b) {
  return a * b;
}
let results = multiply(4, 3);
console.log("Multiplication:", results); // Output: Multiplication: 12

// 4. Arrow Function (Shorter Syntax)
const subtract = (a, b) => a - b;
console.log("Subtraction:", subtract(10, 4)); // Output: Subtraction: 6

// 5. Function with Default Parameter
function sayHello(name = "Guest") {
  console.log("Hello, " + name + "!");
}
sayHello(); // Output: Hello, Guest!
sayHello("Hashim"); // Output: Hello, Hashim!
