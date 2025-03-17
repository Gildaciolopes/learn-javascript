// 📌 JavaScript Basics - Operators

// Welcome to the Operators section of the JavaScript Basics tutorial!
// Here, you'll learn about different types of operators in JavaScript.

// Arithmetic Operators
// Used for mathematical calculations.
let a = 10;
let b = 5;
console.log(a + b); // Addition ➝ 15
console.log(a - b); // Subtraction ➝ 5
console.log(a * b); // Multiplication ➝ 50
console.log(a / b); // Division ➝ 2
console.log(a % b); // Modulus (Remainder) ➝ 0
console.log(a ** b); // Exponentiation ➝ 10^5 = 100000

// Assignment Operators
// Used to assign values to variables.
let x = 10;
x += 5; // x = x + 5 ➝ 15
x -= 3; // x = x - 3 ➝ 12
x *= 2; // x = x * 2 ➝ 24
x /= 4; // x = x / 4 ➝ 6
x %= 2; // x = x % 2 ➝ 0
x **= 3; // x = x ** 3 ➝ 0

// Comparison Operators
// Used to compare values.
console.log(10 == "10"); // Equal (checks value) ➝ true
console.log(10 === "10"); // Strict Equal (checks value & type) ➝ false
console.log(10 != 5); // Not Equal ➝ true
console.log(10 !== "10"); // Strict Not Equal ➝ true
console.log(10 > 5); // Greater than ➝ true
console.log(10 < 20); // Less than ➝ true
console.log(10 >= 10); // Greater than or equal ➝ true
console.log(5 <= 10); // Less than or equal ➝ true

// Logical Operators
// Used for logical expressions.
let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse); // AND ➝ false
console.log(isTrue || isFalse); // OR ➝ true
console.log(!isTrue); // NOT ➝ false

// Bitwise Operators
// Used for bitwise operations (advanced usage).
console.log(5 & 1); // AND ➝ 1 (0101 & 0001 = 0001)
console.log(5 | 1); // OR ➝ 5 (0101 | 0001 = 0101)
console.log(5 ^ 1); // XOR ➝ 4 (0101 ^ 0001 = 0100)
console.log(~5); // NOT ➝ -6 (~00000101 = 11111010)
console.log(5 << 1); // Left shift ➝ 10
console.log(5 >> 1); // Right shift ➝ 2

//  Ternary Operator
// A shorthand for `if...else` statements.
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // ➝ "Adult"

// 💡 Experiment with these operators to understand their behavior!
