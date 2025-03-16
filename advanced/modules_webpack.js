// 📌 JavaScript Intermediate - Modules and Webpack

// Welcome to the seventh section of the JavaScript Intermediate tutorial!
// Here, you'll learn how to use JavaScript modules and bundle them with Webpack.

// Using ES6 Modules
// Exporting a function (file: math.js)
export function add(a, b) {
  return a + b;
}

// Importing a function (file: main.js)
import { add } from "./math.js";
console.log("Sum:", add(5, 3));

// Default Export
// Exporting (file: user.js)
export default class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

// Importing (file: main.js)
import User from "./user.js";
const user = new User("Alice");
user.greet();

// Webpack Overview
// Webpack is a module bundler that helps manage dependencies and optimize code.
// Steps to set up Webpack:
// 1. Install Webpack and Webpack CLI:
//    npm install webpack webpack-cli --save-dev
// 2. Create a webpack.config.js file
// 3. Set entry, output, and loaders in the config file
// 4. Run Webpack to bundle your JavaScript files:
//    npx webpack

// 💡 Practice using ES6 modules and setting up Webpack in a project!
