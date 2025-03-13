// 📌 JavaScript Basics - Variables

// Welcome to the third section of the JavaScript Basics tutorial!
// Here, you'll learn how to declare and use variables in JavaScript.

// What are Variables?
// Variables are used to store data values. JavaScript provides three ways to declare variables:

// 🏷️ var - Function-scoped, can be redeclared and updated
var city = "New York";
console.log("var:", city);

// 🔒 let - Block-scoped, can be updated but not redeclared
let country = "USA";
console.log("let:", country);

// 🔐 const - Block-scoped, cannot be updated or redeclared
const PI = 3.1416;
console.log("const:", PI);

// ⚠️ Difference between var, let, and const
function testScope() {
  if (true) {
    var a = "I am var"; // Accessible outside the block
    let b = "I am let"; // Block-scoped
    const c = "I am const"; // Block-scoped
  }
  console.log(a); // Works
  // console.log(b); // Error
  // console.log(c); // Error
}
testScope();

// 💡 Best Practices
// - Use `const` by default unless the value needs to change.
// - Use `let` if the value needs to be reassigned.
// - Avoid `var` due to potential scoping issues.

// 🚀 Practice declaring variables using var, let, and const.
