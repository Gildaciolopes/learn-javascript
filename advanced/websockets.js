// 📌 JavaScript Advanced - WebSockets

// Welcome to the WebSockets section of the JavaScript Advanced tutorial!
// Here, you'll learn how to implement real-time communication using WebSockets.

// Creating a WebSocket Connection
const socket = new WebSocket("wss://example.com/socket");

// Event Listeners for WebSocket
// Connection opened
socket.addEventListener("open", (event) => {
  console.log("Connected to WebSocket server");
  socket.send("Hello Server!"); // Sending data
});

// Receiving messages
socket.addEventListener("message", (event) => {
  console.log("Message from server:", event.data);
});

// Handling errors
socket.addEventListener("error", (event) => {
  console.error("WebSocket error:", event);
});

// Connection closed
socket.addEventListener("close", (event) => {
  console.log("WebSocket connection closed:", event);
});

// Sending JSON Data
const jsonData = JSON.stringify({ user: "JohnDoe", message: "Hello!" });
socket.send(jsonData);

// 💡 WebSockets are great for chat apps, live notifications, and real-time collaboration!
