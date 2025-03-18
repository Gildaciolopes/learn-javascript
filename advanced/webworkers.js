// 📌 JavaScript Advanced - Web Workers

// Welcome to the Web Workers section of the JavaScript Advanced tutorial!
// Here, you'll learn how to use Web Workers to run scripts in the background without blocking the main thread.

// Creating a Web Worker
// worker.js (Separate File)
self.addEventListener("message", (event) => {
  console.log("Worker received data:", event.data);
  let result = event.data * 2;
  self.postMessage(result);
});

// Using Web Workers in the Main Script
if (window.Worker) {
  const myWorker = new Worker("worker.js");

  myWorker.postMessage(10); // Send data to the worker

  myWorker.onmessage = function (event) {
    console.log("Received from worker:", event.data); // ➝ 20
  };

  myWorker.onerror = function (error) {
    console.error("Worker Error:", error.message);
  };
}

// 💡 Web Workers are useful for heavy computations, data processing, and background tasks!
