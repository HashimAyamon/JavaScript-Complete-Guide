// 1. for Loop (Counts from 1 to 5)
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2. while Loop (Counts from 1 to 5)
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// 3. do-while Loop (Counts from 1 to 5)
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// 4. for...of Loop (Loops through an array)
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}

// 5. for...in Loop (Loops through object properties)
let persons = { name: "John", age: 25 };
for (let key in persons) {
  console.log(key + ": " + persons[key]);
}
