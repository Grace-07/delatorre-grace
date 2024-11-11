// Step 1: Create an array called 'students' with three objects representing student information.
// Each student object should have properties: 'name', 'age', and 'grade'.
const students = [
  {
    name: "Wendy Mill",
    age: 4,
    grade: 1,
  },
  {
    name: "Kenny Roger",
    age: 5,
    grade: 2,
  },
  {
    name: "Lim Chu",
    age: 6,
    grade: 3,
  },
];

// Step 2: Access the name of the second student in the 'students' array and log it to the console.
console.log("Student No.2 Name: " + students[1].name);

// Step 3: Add a new student object to the 'students' array.
// The new student should have properties: 'name', 'age', and 'grade'.
students.push({ name: "Fin Look", age: 5, grade: 6 });

// Step 4: Loop through the 'students' array and log each student's name and grade to the console.
console.log(".... Student List ....");
students.forEach((student, i) => {
  console.log(`Student No.${i + 1} Name: ${student.name}`);
  console.log(`Student No.${i + 1} Grade: ${student.grade}`);
});
console.log(".....");

// Step 5: Create an object called 'book' with properties 'title', 'author', and 'year'.
const book = {
  title: "Book 1",
  author: "Author 1",
  year: 2003,
};

// Step 6: Access the title of the 'book' object and log it to the console.
console.log(`Book Title: ${book.title}`);

// Step 7: Update the 'year' property of the 'book' object to 1930.
book.year = 1930;

// Step 8: Create a method called 'getSummary' for the 'book' object.
// The method should return a string summarizing the book's title, author, and year.
function getSummary() {
  return `Book Summary:
    Title: ${book.title}
    Author: ${book.author}
    Year: ${book.year}`;
}

// Step 9: Call the 'getSummary' method of the 'book' object and log the result to the console.
console.log(getSummary());

// Step 10: Create an array called 'library' and add the 'book' object to it.
const library = [book];

// Step 11: Log the 'library' array to the console to verify the book is stored in the array.
console.log("Library: " + library);

// Step 12: Create an object called 'car' with properties 'brand', 'model', and 'year'.
const car = {
  brand: "Toyota",
  model: "Vios",
  year: 2018,
};

// Step 13: Access the 'model' property of the 'car' object and log it to the console.
console.log("Car Model: " + car.model);

// Step 14: Update the 'year' property of the 'car' object to 2023.
car.year = 2023;
// Step 15: Create a method called 'startEngine' for the 'car' object.
// The method should log a message to the console indicating that the car's engine is starting.
function startEngine() {
  console.log("Engine is starting ...");
}

// Step 16: Call the 'startEngine' method of the 'car' object.
car.startEngine = startEngine();

// Step 17: Create an array called 'garage' and add the 'car' object to it.
const garage = [car];

// Step 18: Log the 'garage' array to the console to verify the car is stored in the array.
console.log("Garage: " + garage);

// Step 19: Create an object called 'person' with properties 'name', 'age', and 'city'.
const person = {
  name: "Sally",
  age: 37,
  city: "QC",
};

// Step 20: Access the 'age' property of the 'person' object and log it to the console.
console.log("Person Age: ", person.age);

// Feel free to add more steps or customize the activity according to your needs.
