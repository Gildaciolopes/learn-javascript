// 📌 JavaScript Basics - Control Structures

// Welcome to the fourth section of the JavaScript Basics tutorial!
// Here, you'll learn about control structures used to manage the flow of a program.

// 🔄 Conditional Statements
// if, else if, else
let age = 18;
if (age < 18) {
  console.log("You are a minor.");
} else if (age === 18) {
  console.log("You just became an adult!");
} else {
  console.log("You are an adult.");
}

// 🔁 Looping Structures

// for loop - Executes a block of code a fixed number of times
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}

// while loop - Executes while a condition is true
let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

// do-while loop - Executes at least once, then repeats while condition is true
let number = 0;
do {
  console.log("Do-while count:", number);
  number++;
} while (number < 3);

// 🎯 Switch Statement - A cleaner way to handle multiple conditions
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("It's a regular day.");
}

// 💡 Practice using these control structures in different scenarios!
