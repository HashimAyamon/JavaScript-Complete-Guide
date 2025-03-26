// 1. Creating an Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);

// 2. Accessing Array Elements
console.log("First Fruit:", fruits[0]); // Apple

// 3. Modifying an Array Element
fruits[1] = "Mango";
console.log("Updated Fruits:", fruits); // ["Apple", "Mango", "Cherry"]

// 4. Adding Elements to an Array
fruits.push("Orange"); // Adds to the end
console.log("After Push:", fruits); // ["Apple", "Mango", "Cherry", "Orange"]

fruits.unshift("Grapes"); // Adds to the beginning
console.log("After Unshift:", fruits); // ["Grapes", "Apple", "Mango", "Cherry", "Orange"]

// 5. Removing Elements from an Array
fruits.pop(); // Removes last element
console.log("After Pop:", fruits); // ["Grapes", "Apple", "Mango", "Cherry"]

fruits.shift(); // Removes first element
console.log("After Shift:", fruits); // ["Apple", "Mango", "Cherry"]

// 6. Looping Through an Array
console.log("Looping through Fruits:");
fruits.forEach((fruit) => console.log(fruit));

// 7. Finding an Element in an Array
console.log("Index of Mango:", fruits.indexOf("Mango")); // 1

// 8. Checking if an Element Exists
console.log("Includes Cherry:", fruits.includes("Cherry")); // true

// 9. Slicing an Array (Extracting Part of an Array)
let someFruits = fruits.slice(0, 2);
console.log("Sliced Fruits:", someFruits); // ["Apple", "Mango"]

// 10. Joining Elements into a String
let fruitString = fruits.join(", ");
console.log("Fruits as String:", fruitString); // "Apple, Mango, Cherry"
