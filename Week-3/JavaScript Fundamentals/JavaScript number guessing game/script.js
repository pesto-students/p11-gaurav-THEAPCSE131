function playGuessingGame(numToGuess, totalGuesses) {
  if (totalGuesses === 0) {
    totalGuesses = 10;
  } else {
    let guessedNum = 0;
    guessedNum = prompt("Enter a number between1 and 100");
    if (guessedNum === numToGuess) {
      console.log(guessedNum, "SSS");
      alert("Hi");
      alert(`Congratulations! You guessed the number ${numToGuess} correctly.`);
      return guessedNum;
    } else {
      while (totalGuesses > 0) {
        if (guessedNum < numToGuess) {
          guessedNum = prompt(
            guessedNum + " is too small. Guess a larger number"
          );
          //   return guessedNum;
        } else if (guessedNum > numToGuess) {
          guessedNum = prompt(
            guessedNum + " is too large. Guess a smaller number."
          );
          //   return guessedNum;
        } else if (guessedNum === "") {
          guessedNum = prompt("Please enter a number");
          //   return guessedNum;
        } else {
          alert(
            `Congratulations! You guessed the number ${numToGuess} correctly.`
          );
          return numToGuess;
        }

        totalGuesses--;
      }
    }
  }
  alert(`Game over. You couldn't guess the number ${numToGuess}.`);
  return 0;
}

playGuessingGame(7, 5);
