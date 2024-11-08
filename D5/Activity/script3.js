const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 1;
let guessedNumber = 0;

console.log("Welcome! Guess the Secret Number");

do {
  guessedNumber = parseInt(prompt("Enter your Guess Number (1-10)"));

  if ((guessedNumber > 10 || guessedNumber < 1) || (isNaN(guessedNumber) || typeof guessedNumber !== "number")) {
    console.log("Please enter a number only (1-10). Try Again");
  } else {
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
  }
} while (secretNumber !== guessedNumber);

console.log(`It took you ${attempts}  attempts`);
