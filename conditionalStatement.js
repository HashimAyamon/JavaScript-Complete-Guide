let num = 10;

// if statement
if (num > 5) {
    console.log("The number is positive.");
}

// if-else statement
if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// if-else if-else statement
let age = 18;
if (age < 18) {
    console.log("You are a minor.");
} else if (age === 18) {
    console.log("You just became an adult!");
} else {
    console.log("You are an adult.");
}

// Nested if statement
let score = 85;
if (score >= 50) {
    console.log("You passed!");
    if (score >= 90) {
        console.log("Excellent score!");
    } else if (score >= 75) {
        console.log("Good job!");
    }
}

// Switch case
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the workweek!");
        break;
    case "Friday":
        console.log("Weekend is coming!");
        break;
    case "Sunday":
        console.log("It's a relaxing day!");
        break;
    default:
        console.log("Just another day!");
}

// Ternary Operator
let isRaining = true;
let message = isRaining ? "Take an umbrella." : "Enjoy the sunshine!";
console.log(message);
