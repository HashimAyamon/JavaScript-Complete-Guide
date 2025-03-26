// 1. Creating Strings
let str1 = "Hello";
let str2 = "Hashim";
console.log("String 1:", str1);
console.log("String 2:", str2);

// 2. String Concatenation (Joining Strings)
let combined = str1 + " " + str2; // Using + operator
console.log("Concatenated:", combined); // Output: Hello Hashim

let combined2 = `${str1} ${str2}`; // Using Template Literals
console.log("Concatenated (Template Literals):", combined2);

// 3. Convert to Lowercase and Uppercase
console.log("Lowercase:", combined.toLowerCase()); // hello Hashim
console.log("Uppercase:", combined.toUpperCase()); // HELLO Hashim

// 4. Checking if a String Includes a Word
console.log("Includes 'Hashim'?", combined.includes("Hashim")); // true

// 5. Finding the Length of a String
console.log("String Length:", combined.length); // 11

// 6. Extracting a Part of a String
console.log("Substring (0-5):", combined.substring(0, 5)); // Hello
console.log("Slice (0-5):", combined.slice(0, 5)); // Hello

// 7. Replacing Text in a String
let newStr = combined.replace("Hashim", "JavaScript");
console.log("Replaced String:", newStr); // Hello JavaScript

// 8. Splitting a String into an Array
let words = combined.split(" ");
console.log("Split into Array:", words); // ["Hello", "Hashim"]

// 9. Removing Extra Spaces (Trim)
let extraSpaces = "   JavaScript   ";
console.log("Trimmed String:", extraSpaces.trim()); // "JavaScript"
