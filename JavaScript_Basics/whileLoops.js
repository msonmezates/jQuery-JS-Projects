console.log('PRINTING ALL NUMBERS BETWEEN -10 AND 19');

let counter = -10;
while(counter<20) {
	console.log(counter);
	counter++;
}

console.log('PRINTING ALL EVEN NUMBERS BETWEEN 10 AND 40');

counter = 10;
while(counter<41) {
	console.log(counter);
	counter+=2;
}

console.log('PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333');

counter = 300;
while(counter<334) {
	if(counter%2 !== 0) {
		console.log(counter);
	}
	counter++;
}

console.log('PRINTING ALL NUMBERS DIVISIBLE BY 3 AND 5 BETWEEN 5 AND 50');

counter = 5;
while(counter<51) {
	if(counter%15 === 0) {
		console.log(counter);
	}
	counter++;
}