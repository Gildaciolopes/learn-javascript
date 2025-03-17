// 📌 JavaScript Intermediate - Error Handling

// Welcome to the Error Handling section of the JavaScript Intermediate tutorial!
// Here, you'll learn how to handle errors effectively in JavaScript.

// Try...Catch
// Used to catch and handle errors gracefully.
try {
  let result = 10 / 0;
  console.log(result); // ➝ Infinity (not an error, but unusual behavior)
  throw new Error("Custom error message");
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("This block always runs");
}

// Handling Errors in Async/Await
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}
fetchData();

// Custom Error Classes
// Extending the built-in Error class for specific error types.
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
function validateNumber(num) {
  if (typeof num !== "number") {
    throw new ValidationError("Invalid number input!");
  }
  return true;
}
try {
  validateNumber("abc");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation Error:", error.message);
  } else {
    console.error("General Error:", error.message);
  }
}

// 💡 Always handle errors to prevent unexpected crashes and improve user experience!
