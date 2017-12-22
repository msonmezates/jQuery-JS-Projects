let secretNumber = Math.floor(Math.random() * 11);
console.log(secretNumber);

let guess = Number(prompt("Guess a number"));

if ( guess === secretNumber ) {
	alert('You guessed it!');
} else if ( guess > secretNumber ) {
	alert("Your guess is too high!");
} else {
	alert('Your guess is too low!')
}