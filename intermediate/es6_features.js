// 📌 JavaScript Intermediate - ES6+ Features

// Welcome to the fourth section of the JavaScript Intermediate tutorial!
// Here, you'll learn about modern JavaScript features introduced in ES6 and beyond.

// let and const (Block-Scoped Variables)
let city = "New York";
const country = "USA";
console.log(city, country);

// Template Literals
const name = "Alice";
console.log(`Hello, ${name}!`);

// Arrow Functions
const add = (a, b) => a + b;
console.log("Sum:", add(5, 3));

// Destructuring Arrays and Objects
const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;
console.log(firstName, lastName);

// Spread and Rest Operators
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log("Spread:", newNumbers);

const sumAll = (...nums) => nums.reduce((total, num) => total + num, 0);
console.log("Rest:", sumAll(1, 2, 3, 4));

// Default Parameters
const greet = (name = "Guest") => console.log(`Hello, ${name}!`);
greet();

// Promises and Async/Await
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data Loaded"), 2000);
  });
};

async function loadData() {
  const data = await fetchData();
  console.log(data);
}
loadData();

// 💡 Practice using ES6+ features to write cleaner and more efficient code!
