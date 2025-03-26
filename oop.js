/////////////////////////////////////////////////////////////////////////////////////////////////////
// 1
// class
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method to display car details
  getDetails() {
    return `Car: ${this.brand} ${this.model} (${this.year})`;
  }
}

// Creating objects from the class
const car1 = new Car("Toyota", "Corolla", 2022);
const car2 = new Car("Honda", "Civic", 2023);

console.log(car1.getDetails()); // Output: Car: Toyota Corolla (2022)
console.log(car2.getDetails()); // Output: Car: Honda Civic (2023)

//   Adding Methods to Modify Object Data
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to update age
  haveBirthday() {
    this.age++;
    console.log(`${this.name} is now ${this.age} years old.`);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
//   2
// Creating an object
const person1 = new Person("Alice", 25);
console.log(person1.age); // Output: 25

person1.haveBirthday(); // Output: Alice is now 26 years old.

//   Object Without Using a Class (Object Literal)
const student = {
  name: "John",
  age: 20,
  course: "Computer Science",
  getDetails: function () {
    return `${this.name} is studying ${this.course}`;
  },
};

console.log(student.getDetails()); // Output: John is studying Computer Science

/////////////////////////////////////////////////////////////////////////////////////////////////////
// 3
// Encapsulation (Data Hiding)
class BankAccount {
  #balance; // Private field (only accessible inside the class)

  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.#balance = balance;
  }

  // Method to access private balance safely
  getBalance() {
    return `Account: ${this.accountNumber}, Balance: $${this.#balance}`;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited $${amount}. New Balance: $${this.#balance}`);
  }
}

const account = new BankAccount("123456789", 1000);
console.log(account.getBalance()); // Output: Account: 123456789, Balance: $1000
account.deposit(500); // Output: Deposited $500. New Balance: $1500

//   console.log(account.#balance); // Error: Private field not accessible outside the class

/////////////////////////////////////////////////////////////////////////////////////////////////////
// 4
// Inheritance (Code Reusability)
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic animal sound");
  }
}

// Child class (inherits from Animal)
class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!");
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Woof! Woof!

/////////////////////////////////////////////////////////////////////////////////////////////////////
// 5
//   Polymorphism (Method Overriding)
class Shape {
  area() {
    return "This method should be overridden!";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.area()); // Output: 78.5398 (πr²)

const myRectangle = new Rectangle(4, 6);
console.log(myRectangle.area()); // Output: 24 (w × h)

/////////////////////////////////////////////////////////////////////////////////////////////////////
// 6
//   Abstraction (Hiding Implementation Details)
class Vehicle {
  constructor(name) {
    if (this.constructor === Vehicle) {
      throw new Error("Cannot instantiate abstract class!");
    }
    this.name = name;
  }

  startEngine() {
    throw new Error("startEngine() must be implemented in a subclass");
  }
}

class Car extends Vehicle {
  startEngine() {
    return `${this.name}'s engine is starting... Vroom!`;
  }
}

const myCar = new Car("Toyota");
console.log(myCar.startEngine()); // Output: Toyota's engine is starting... Vroom!

const myVehicle = new Vehicle("Generic Vehicle"); // Error: Cannot instantiate abstract class!
