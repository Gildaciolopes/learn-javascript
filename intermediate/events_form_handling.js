// 📌 JavaScript Intermediate - Events and Form Handling

// Welcome to the third section of the JavaScript Intermediate tutorial!
// Here, you'll learn how to handle user interactions and form submissions.

// Event Listeners
const button = document.getElementById("clickBtn");
button.addEventListener("click", () => {
  alert("Button Clicked!");
});

// Handling Keyboard Events
const inputField = document.getElementById("textInput");
inputField.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});

// Form Handling
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents page reload
  const username = document.getElementById("username").value;
  console.log("Submitted Username:", username);
});

// Event Delegation
const list = document.getElementById("itemList");
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    alert("Item clicked: " + event.target.textContent);
  }
});

// 💡 Practice handling different types of events and form submissions!
