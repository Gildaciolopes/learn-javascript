// 📌 JavaScript Intermediate - Unit Testing

// Welcome to the tenth section of the JavaScript Advanced tutorial!
// Here, you'll learn the basics of Unit Testing in JavaScript using Jest.

// What is Unit Testing?
// Unit testing is a software testing method where individual components (functions, modules) are tested independently to ensure they work correctly.

// Setting Up Jest (if using Node.js)
// 1. Install Jest: npm install --save-dev jest
// 2. Add a test script in package.json: "test": "jest"
// 3. Create a test file, e.g., math.test.js

// Writing a Simple Unit Test with Jest
// File: math.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// File: math.test.js
const add = require("./math");

test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

// Run tests with: npm test

// Testing Asynchronous Code
async function fetchData() {
  return "Hello, World!";
}

// File: async.test.js
const fetchData = require("./async");

test("fetches correct data", async () => {
  const data = await fetchData();
  expect(data).toBe("Hello, World!");
});

//  Mocking Functions in Jest
const fetchUser = jest.fn(() => Promise.resolve({ name: "Alice" }));

test("mocks a function call", async () => {
  const user = await fetchUser();
  expect(user.name).toBe("Alice");
  expect(fetchUser).toHaveBeenCalled();
});

// 💡 Practice writing unit tests for your functions to ensure your code is reliable and maintainable!
