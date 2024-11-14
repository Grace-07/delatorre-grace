// Activity: Exploring ES6 Features

// Objective: Practice using ES6 features to enhance your JavaScript code.

// Instructions:
// 1. Create an HTML file with a heading that says "ES6 Features".
// 2. Create a JavaScript file and link it to the HTML file.
// 3. In the JavaScript file, you will find comments describing different tasks that need to be performed using ES6 features. Your task is to write the code to complete these tasks.
// 4. The tasks to be completed are as follows:
//    a. Use arrow functions to calculate the square of a given number and log the result to the console.
//    b. Use template literals to create a welcome message that includes the name and age of a person.
//    c. Use destructuring to extract the first and last name from a person object and log them to the console.
//    d. Use the spread operator to merge two arrays into a single array.
//    e. Use default parameters to create a function that calculates the area of a rectangle. If no arguments are provided, assume a default length and width of 1.
//    f. Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.

// Note: Read the comments carefully to understand the requirements for each task. Use the appropriate ES6 features to accomplish the given task.

// Good luck!

// Your code implementation goes here:

// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const calculateSquare = (num) => num * num;
console.log("calculate the square a given number: ", calculateSquare(33));

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const name = "Anna";
const age = 20;
const greeting = `Hello, My name is ${name} and I'm ${age} years old. Welcome to our shop!`;

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const person = {
  first: "John",
  last: "Doe",
};
const { first, last } = person;
console.log("First name: ", first);
console.log("Last name: ", last);

// Task 4: Use the spread operator to merge two arrays into a single array.
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const mergeArr = [...arr1, ...arr2];

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
const calculateArea = (len = 1, wid = 1) => len * wid;

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
class Person {
  name = "Anna";
  age = 20;

  introduce() {
    console.log(`Hello, I'm ${name} and I'm ${age} years old.`);
  }
}

const person1 = new Person();
person1.introduce();
