// 📌 JavaScript Intermediate - Promises and Async/Await

// Welcome to the fifth section of the JavaScript Intermediate tutorial!
// Here you'll learn how to handle asynchronous operations using Promises

// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Async/Await
const loadData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

loadData();

// Using Fetch API with Async/Await
const fetchUser = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();
    console.log("User Data:", user);
  } catch (error) {
    console.error("Enter fetching user data:", error);
  }
};

fetchUser();

// 💡 Practice handling asynchronous operations with Promises and Async/Await!
