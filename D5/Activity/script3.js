const secretNumber = Math.floor(Math.random() * 11);
let attempts = 0;

let guessedNumber = 0;

console.log("Welcome! Guest the Secret Number");

do {
  guessedNumber = parseInt(prompt("Enter Guess Number "));

  if (guessedNumber < secretNumber) {
    console.log("Too Low! Try Again.");

    attempts++;
  } else if (guessedNumber > secretNumber) {
    console.log("Too High! Try Again.");

    attempts++;
  } else {
    console.log(
      "Congratulations! You guessed the correct number: " + secretNumber
    );
  }
} while (secretNumber !== guessedNumber);

console.log(`It took you ${attempts}  attempts`);
