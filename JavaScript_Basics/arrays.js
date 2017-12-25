printReverse = arr => {
	const result = [];
	for(let i=0; i<arr.length; i++) {
		result.unshift(arr[i]);
	}
	return result;
}


isUniform = arr => {
	let firstEl = arr[0];
	for(let i=1; i<arr.length; i++) {
		if(firstEl !== arr[i]) {
			return false;
		} 
	}
	return true;
}


sumArray = arr => {
	return arr.reduce((result, el) => result += el, 0);
}


max = arr => {
	let max =0;
	for(let el of arr) {
		if(el > max) max = el;
	}
	return max;
}