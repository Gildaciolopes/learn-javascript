// 📌 JavaScript Intermediate - DOM Manipulation

// Welcome to the second section of the JavaScript Intermediate tutorial!
// Here, you'll learn how to interact with and modify the Document Object Model (DOM).

// Selecting Elements
const heading = document.getElementById("main-title"); // Select by ID
const paragraphs = document.getElementsByClassName("text"); // Select by class
const allDivs = document.getElementsByTagName("div"); // Select by tag
const firstItem = document.querySelector(".item"); // Select first match
const allItems = document.querySelectorAll(".item"); // Select all matches

console.log("Heading:", heading);
console.log("Paragraphs:", paragraphs);
console.log("All Divs:", allDivs);
console.log("First Item:", firstItem);
console.log("All Items:", allItems);

// Modifying Elements
heading.textContent = "Updated Title"; // Change text
heading.style.color = "blue"; // Change style
heading.classList.add("highlight"); // Add a class

// Creating and Appending Elements
const newParagraph = document.createElement("p"); // Create new element
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph); // Append to body

// Event Listeners
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button clicked!");
});

// 💡 Practice selecting, modifying, and handling events in the DOM!
