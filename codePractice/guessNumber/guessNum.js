let playAgain = "y";
let guessCount = 0;

while (playAgain === "y") {
  document.write("Let's play Guess the Number!<br>");
  let difficulty = parseInt(prompt("Pick a difficulty level (1 (lowest) to 3 (highest)):"));
  
  let maxNumber = 0;
  if (difficulty === 1) {
    maxNumber = 10;
  } else if (difficulty === 2) {
    maxNumber = 100;
  } else if (difficulty === 3) {
    maxNumber = 1000;
  } else {
    document.write("Invalid input. Goodbye!");
    break;
  }

  let number = Math.floor(Math.random() * maxNumber) + 1;
  let guess = 0;

  while (guess !== number) {
    guess = parseInt(prompt("I have a number between 1 and " + maxNumber + ". What's your guess?"));
    guessCount += 1;

    if (guess < number) {
      alert("A bit higher. Guess again: ");
    } else if (guess > number) {
      alert("A bit lower. Guess again: ");
    } else {
      document.write("You got it in " + guessCount + " guesses!<br>");
      guessCount = 0;
      playAgain = prompt("Play again? Say y or n").toLowerCase();
    }
  }
}

document.write("Goodbye!");
