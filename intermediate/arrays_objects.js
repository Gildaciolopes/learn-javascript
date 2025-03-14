// 📌 JavaScript Intermediate - Arrays and Objects

// Welcome to the first section of the JavaScript Intermediate tutorial!
// Here, you'll learn how to work with arrays and objects more efficiently.

// Arrays - Ordered collections of values
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);

// Accessing elements
console.log("First fruit:", fruits[0]);

// Adding and removing elements
fruits.push("Orange"); // Adds at the end
console.log("After push:", fruits);
fruits.pop(); // Removes last element
console.log("After pop:", fruits);

// Iterating over arrays
fruits.forEach((fruit, index) => {
  console.log(`Fruit ${index + 1}: ${fruit}`);
});

// Objects - Collections of key-value pairs
let person = {
  name: "Alice",
  age: 25,
  city: "New York",
};
console.log("Person:", person);

// Accessing object properties
console.log("Name:", person.name);
console.log("Age:", person["age"]);

// Adding and modifying properties
person.job = "Engineer";
console.log("Updated person:", person);

// Object iteration
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 💡 Practice working with arrays and objects using different methods!
