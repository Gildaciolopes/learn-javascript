// 📌 JavaScript Intermediate - Object-Oriented Programming (OOP)

// Welcome to the sixth section of the JavaScript Advanced tutorial!
// Here, you'll learn about Object-Oriented Programming (OOP) in JavaScript.

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}
const person1 = new Person("Alice", 25);
person1.greet();

// Classes (ES6+)
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}
const dog = new Animal("Dog", "Woof");
dog.makeSound();

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Woof");
    this.breed = breed;
  }
  showBreed() {
    console.log(`${this.name} is a ${this.breed}.`);
  }
}
const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound();
myDog.showBreed();

//  Getters and Setters
class User {
  constructor(username) {
    this._username = username;
  }
  get username() {
    return this._username;
  }
  set username(newUsername) {
    this._username = newUsername;
  }
}
const user = new User("JohnDoe");
console.log(user.username);
user.username = "JaneDoe";
console.log(user.username);

// 💡 Practice using OOP principles to structure your JavaScript applications!
