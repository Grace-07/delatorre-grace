let score = parseInt(prompt("Enter a Score"));
let grade = "";

if (typeof score !== "number") {
  alert("Please enter a number only. Try Again");
} else {
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80 && score <= 89 && score) {
    grade = "B";
  } else if (score >= 70 && score <= 79 && score) {
    grade = "C";
  } else if (score >= 60 && score <= 69 && score) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log("Score: " + score);
  console.log("Grade: " + grade);
}
