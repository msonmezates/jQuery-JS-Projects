let age = Number(prompt("What's your age?"));

if ( age < 0 ) {
	console.log('Enter a valid number');
} else if (  age === 21 ) {
	console.log("happy 21st birthday");
} else if ( age % Math.sqrt(age) === 0 ) {
	console.log("perfect square");
} else if ( age % 2 === 1 ) {
	console.log('your age is odd!')
}