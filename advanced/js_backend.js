// 📌 JavaScript Advanced - Backend Development with Node.js & Express

// Welcome to the eleventh section of the JavaScript Advanced tutorial!
// Here, you'll learn how to use JavaScript on the backend with Node.js and Express.

// Setting Up Node.js & Express
// 1. Install Node.js (https://nodejs.org/)
// 2. Initialize a project: npm init -y
// 3. Install Express: npm install express

// Creating a Simple Express Server
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Hello, Backend!");
});

// Example API endpoint
app.get("/api/data", (req, res) => {
  res.json({ message: "This is some data from the backend." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Handling POST Requests
app.post("/api/data", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

// Using Middleware in Express
const logger = (req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
};

app.use(logger);

// 💡 Try adding more routes, handling errors, and integrating with a database like MongoDB!
