//isEven
isEven = num => num%2===0;

//factorial
factorial = num => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
  	result *= i;
  }
  return result;	
}

//replacing characters
kebabToSnake = str => {
  return str.replace(/-/g,"_")
}



