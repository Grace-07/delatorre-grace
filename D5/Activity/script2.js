let start = parseInt(prompt("Enter Starting Number"));
let end = parseInt(prompt("Enter Ending Number"));

if (typeof start !== "number" || typeof end !== "number") {
  alert("Please enter a number only. Try Again");
} else {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}
