// 📌 JavaScript Intermediate - Storage (LocalStorage, SessionStorage, Cookies)

// Welcome to the Storage section of the JavaScript Intermediate tutorial!
// Here, you'll learn how to store data in the browser using LocalStorage, SessionStorage, and Cookies.

// LocalStorage
// Stores data with no expiration time (persists even after closing the browser).
localStorage.setItem("username", "JohnDoe"); // Save data
console.log(localStorage.getItem("username")); // Retrieve data ➝ "JohnDoe"
localStorage.removeItem("username"); // Remove data
localStorage.clear(); // Clear all data

// SessionStorage
// Stores data for the duration of a session (deleted when the tab is closed).
sessionStorage.setItem("sessionData", "Temporary Info");
console.log(sessionStorage.getItem("sessionData")); // ➝ "Temporary Info"
sessionStorage.removeItem("sessionData");
sessionStorage.clear();

// Cookies
// Stores small amounts of data with an expiration time.
document.cookie = "user=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
console.log(document.cookie); // ➝ "user=JohnDoe"

// Function to set a cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let cookiesArray = document.cookie.split("; ");
  for (let cookie of cookiesArray) {
    if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length);
  }
  return null;
}

// Function to delete a cookie
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Example usage:
setCookie("theme", "dark", 7); // Store a cookie for 7 days
console.log(getCookie("theme")); // ➝ "dark"
deleteCookie("theme"); // Delete the cookie

// 💡 Use the appropriate storage method based on data persistence needs!
