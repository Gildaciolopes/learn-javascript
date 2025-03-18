// 📌 JavaScript Advanced - Introduction to TypeScript
// Welcome to the TypeScript section of the JavaScript Advanced tutorial!
// Here, you'll learn how TypeScript enhances JavaScript with static typing.
// Installing TypeScript
// Run the following command to install TypeScript globally:
// npm install -g typescript
//  Declaring Variables with Types
var message = "Hello, TypeScript!";
var count = 42;
var isActive = true;
// Functions with Type Annotations
function greet(name) {
  return "Hello, ".concat(name, "!");
}
console.log(greet("John"));
var user = { id: 1, name: "Alice", isAdmin: false };
console.log(user);
// Using Classes with TypeScript
var Person = /** @class */ (function () {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHello = function () {
    console.log("Hello, my name is ".concat(this.name));
  };
  return Person;
})();
var person = new Person("Emma");
person.sayHello();

// Explain how to run this file
// To run this file, you can use the following command:
// tsc advanced\ts_intro.ts
// This will compile the TypeScript code into JavaScript.
// Then, you can run the generated JavaScript file:
// node advanced\ts_intro.js
// will execute the JavaScript code and produce the output:
// Hello, TypeScript!// Hello, John! // { id: 1, name: 'Alice', isAdmin: false }
// Hello, my name is Emma

// 💡 TypeScript helps prevent errors by enforcing type safety and better code structure!
