//  ES6+ Features Explained in Simple Terms

//  1. Let & Const (Better Variable Declaration)
let name = "Hashim";  // Can be changed later
const PI = 3.1416;    // Cannot be changed (constant)

// 2. Arrow Functions (Shorter Way to Write Functions)
const greet = (userName) => `Hello, ${userName}!`;
console.log(greet("Hashim"));

// 3. Template Literals (Easier String Formatting)
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);

// 4. Default Parameters (Function with Default Values)
const sayHello = (person = "Guest") => console.log(`Hello, ${person}!`);
sayHello(); // Output: Hello, Guest!

//  5. Object & Array Destructuring (Easy Data Extraction)
const user = { firstName: "Hashim", city: "Kerala" };
const { firstName, city } = user; // Extracting values easily
console.log(firstName, city); 

const numbers = [10, 20, 30];
const [num1, num2] = numbers; // Extracting array values
console.log(num1, num2);

//  6. Spread & Rest Operators (...)
// Spread (Copy & Expand Data)
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // Copying oldArray & adding more items
console.log(newArray);

// Rest (Multiple Arguments into One)
const sum = (...nums) => nums.reduce((total, n) => total + n, 0);
console.log(sum(1, 2, 3, 4)); // Output: 10

//  7. Promises (Handling Asynchronous Code)
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded!"), 2000);
  });
};

fetchData().then((result) => console.log(result)); // Output after 2 sec

//  8. Async & Await (Better Way to Handle Async Code)
const loadData = async () => {
  let response = await fetchData(); // Wait until fetchData() is done
  console.log(response);
};
loadData();

//  9. Modules (Separate Code into Files) - (For use in modules)
// Export (Create a function to be used in another file)
// export const add = (a, b) => a + b;

// Import (Use the function in another file)
// import { add } from './math.js';

//  10. Optional Chaining (Avoid Errors in Nested Objects)
const userInfo = { profile: { username: "Hashim" } };
console.log(userInfo.profile?.username); //  Output: Hashim
console.log(userInfo.address?.city); //  Output: undefined (no error)

//  11. Nullish Coalescing (Set Default Value for Null/Undefined)
let username = null;
console.log(username ?? "Guest"); // Output: Guest (if username is null)

//  12. Useful Array Methods (Map, Filter, Reduce)
const nums = [1, 2, 3, 4, 5];

// Map (Change Each Item)
console.log(nums.map(n => n * 2)); // [2, 4, 6, 8, 10]

// Filter (Get Only Specific Items)
console.log(nums.filter(n => n % 2 === 0)); // [2, 4]

// Reduce (Calculate a Single Value)
console.log(nums.reduce((total, n) => total + n, 0)); // 15
