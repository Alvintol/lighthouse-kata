// Conditions
/* 
 - Create a number guessing game where the user has to guess a 
secret number.
 - Program will tell the user: too large, too small or correct
 - Must print out how many guesses it took 
 - Inputting the same number multiple times, only counts as 1
 - If input is not a number, error must display and do not count
towards total guesses
 */


let prompt = require("prompt-sync")();
let answer = prompt("Guess a number: ");
console.log("You answered: " + answer);

let target = (Math.floor(Math.random() * 100));
let guessCount = 0;
let guessList = [''];

while (answer != target) {
  if (guessList.indexOf(answer) > 0) {
    console.log('Already Guessed! Try again!')
    answer = prompt("Guess a number: ");
  }
  else if (answer > target) {
    console.log('Too High!');
    guessCount++;
    guessList.push(answer);
    answer = prompt("Guess a number: ");
  }
  else if (answer < target) {
    console.log("Too Low!");
    guessCount++;
    guessList.push(answer);
    answer = prompt("Guess a number: ");

  }
  else if (answer != /\d/) {
    console.log('Not a number! Try again!');
    answer = prompt("Guess a number: ");
  }
}

if (answer == target) {
  guessCount++;
  console.log(`You got it! you took ${guessCount} attempts!`);
}