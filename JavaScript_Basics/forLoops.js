console.log('PRINTING ALL NUMBERS BETWEEN -10 AND 19');

for (let i = -10; i <20; i++) {
	console.log(i);
}

console.log('PRINTING ALL EVEN NUMBERS BETWEEN 10 AND 40');

for (let i = 10; i <=40; i+=2) {
	console.log(i);
}

console.log('PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333');

for (let i = 300; i <= 333; i++) {
	if(i % 2 !== 0) {
		console.log(i);
	}
}

console.log('PRINTING ALL NUMBERS DIVISIBLE BY 3 AND 5 BETWEEN 5 AND 50');

for (let i = 5; i <= 50; i++) {
	if(i % 15 === 0) {
		console.log(i);
	}
}