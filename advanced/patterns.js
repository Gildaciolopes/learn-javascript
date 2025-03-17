// 📌 JavaScript Advanced - Design Patterns & Best Practices

// Welcome to the thirteenth section of the JavaScript Advanced tutorial!
// Here, you'll learn about common design patterns and best coding practices in JavaScript.

// Singleton Pattern
// Ensures that a class has only one instance and provides a global access point.
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
  sayHello() {
    console.log("Hello from Singleton!");
  }
}
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true

// Factory Pattern
// Creates objects without specifying the exact class.
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}
function userFactory(name, role) {
  return new User(name, role);
}
const admin = userFactory("Alice", "admin");
console.log(admin);

// Observer Pattern
// Allows objects to subscribe to changes in another object.
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}
class Observer {
  update(data) {
    console.log("Received update:", data);
  }
}
const subject = new Subject();
const observer1 = new Observer();
subject.subscribe(observer1);
subject.notify("New Data");

// Best Practices
// - Use meaningful variable names
// - Follow the DRY (Don't Repeat Yourself) principle
// - Keep functions small and focused
// - Use modular code with ES6 modules
// - Handle errors properly using try/catch
// - Optimize performance by avoiding unnecessary computations

// 💡 Explore more patterns like MVC, Decorator, and Proxy for advanced design principles!
