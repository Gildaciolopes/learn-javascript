// 📌 JavaScript Intermediate - API Consumption (Fetch & Axios)

// Welcome to the eighth section of the JavaScript Advanced tutorial!
// Here, you'll learn how to fetch data from APIs using Fetch API and Axios.

// Define API URL for maintainability
const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

// Fetch API with Error Handling
fetch(API_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log("Fetch API Data:", data))
  .catch((error) => console.error("Fetch Error:", error));

// Using Fetch with Async/Await and Error Handling
async function getPost() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Async/Await Fetch Data:", data);
  } catch (error) {
    console.error("Error fetching post:", error);
  }
}
getPost();

// Using Axios (Ensure Axios is installed: npm install axios)
import axios from "axios";

axios
  .get(API_URL)
  .then((response) => console.log("Axios Data:", response.data))
  .catch((error) => {
    if (error.response) {
      console.error(
        `Axios Error: ${error.response.status} - ${error.response.statusText}`
      );
    } else if (error.request) {
      console.error("Axios Error: No response received", error.request);
    } else {
      console.error("Axios Error:", error.message);
    }
  });

// Axios with Async/Await and Error Handling
async function getPostWithAxios() {
  try {
    const response = await axios.get(API_URL);
    console.log("Axios Async/Await Data:", response.data);
  } catch (error) {
    if (error.response) {
      console.error(
        `Axios Error: ${error.response.status} - ${error.response.statusText}`
      );
    } else if (error.request) {
      console.error("Axios Error: No response received", error.request);
    } else {
      console.error("Axios Error:", error.message);
    }
  }
}
getPostWithAxios();

// 💡 Practice fetching data from different APIs using Fetch and Axios, and ensure proper error handling!
