let secret = Math.floor(Math.random() * 10) + 1;
let guess;

do {
    guess = Number(prompt("Guess a number between 1 and 10:"));

    if (isNaN(guess) || guess < 1 || guess > 10) {
        alert("Please enter a valid number between 1 and 10.");
        continue;
    }

    if (guess === secret) {
        alert("Correct! You win 🎉");
    } else if (guess > secret) {
        alert("Too high! Try again.");
    } else {
        alert("Too low! Try again.");
    }

} while (guess !== secret);
