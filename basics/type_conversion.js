// 📌 JavaScript Basics - Type Conversion

// Welcome to the Type Conversion section of the JavaScript Basics tutorial!
// Here, you'll learn how to convert values between different data types in JavaScript.

// Implicit Type Conversion (Type Coercion)
// JavaScript automatically converts types in some cases.
console.log("5" + 2); // ➝ "52" (number converted to string)
console.log("5" - 2); // ➝ 3 (string converted to number)
console.log("5" * 2); // ➝ 10 (string converted to number)
console.log("5" / 2); // ➝ 2.5 (string converted to number)
console.log("5" == 5); // ➝ true (values are coerced to the same type)

// Explicit Type Conversion
// Convert values manually using JavaScript functions.

// Convert to Number
let strNum = "123";
console.log(Number(strNum)); // ➝ 123
console.log(parseInt("123.45")); // ➝ 123 (integer conversion)
console.log(parseFloat("123.45")); // ➝ 123.45 (float conversion)
console.log(+"99"); // ➝ 99 (unary plus operator)
console.log(Number("hello")); // ➝ NaN (Not a Number)

// Convert to String
let num = 456;
console.log(String(num)); // ➝ "456"
console.log(num.toString()); // ➝ "456"
console.log((123).toString()); // ➝ "123"

// Convert to Boolean
console.log(Boolean(1)); // ➝ true
console.log(Boolean(0)); // ➝ false
console.log(Boolean("Hello")); // ➝ true
console.log(Boolean("")); // ➝ false
console.log(Boolean(null)); // ➝ false
console.log(Boolean(undefined)); // ➝ false
console.log(Boolean(NaN)); // ➝ false

//  Truthy & Falsy Values
// Values that evaluate to `true` or `false` in a Boolean context.
let truthyValues = [1, "Hello", {}, [], 3.14, -1]; // All truthy
let falsyValues = [0, "", null, undefined, NaN, false]; // All falsy

// 💡 Practice converting different values to understand JavaScript's type conversion behavior!
