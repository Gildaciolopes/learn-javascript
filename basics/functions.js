// 📌 JavaScript Basics - Functions

// Welcome to the fifth section of the JavaScript Basics tutorial!
// Here, you'll learn how to declare and use functions in JavaScript.

// Function Declaration (Named Function)
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));

// Function Expression (Anonymous Function)
const add = function (a, b) {
  return a + b;
};
console.log("Sum:", add(5, 3));

// Arrow Function (ES6+)
const multiply = (x, y) => x * y;
console.log("Multiplication:", multiply(4, 2));

// Default Parameters
function sayHello(name = "Guest") {
  console.log("Hello, " + name);
}
sayHello();

// Rest Parameters
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Total Sum:", sumAll(1, 2, 3, 4, 5));

// Callback Functions
function processArray(arr, callback) {
  return arr.map(callback);
}
const numbers = [1, 2, 3, 4];
const doubled = processArray(numbers, (num) => num * 2);
console.log("Doubled Array:", doubled);

// 💡 Practice writing different types of functions!
