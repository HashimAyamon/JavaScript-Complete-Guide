// Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0
console.log("Exponentiation:", a ** b); // 100000

// Assignment Operators
let x = 10;
x += 5; // x = x + 5
console.log("Assignment (+=):", x); // 15

// Comparison Operators
console.log("Equal:", a == b); // false
console.log("Strict Equal:", a === b); // false
console.log("Not Equal:", a != b); // true
console.log("Greater than:", a > b); // true
console.log("Less than:", a < b); // false

// Logical Operators
let condition1 = true;
let condition2 = false;
console.log("AND:", condition1 && condition2); // false
console.log("OR:", condition1 || condition2); // true
console.log("NOT:", !condition1); // false

// Bitwise Operators
console.log("Bitwise AND:", a & b); // 0
console.log("Bitwise OR:", a | b); // 15

// Ternary Operator
let result = a > b ? "A is greater" : "B is greater";
console.log("Ternary Operator:", result);

// Typeof Operator
console.log("Type of a:", typeof a); // number
