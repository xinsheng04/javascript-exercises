const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let total = 0;
  arr.forEach(element => {
    total += element;
  });
  return total;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(element=> {
    product *= element;
  });
  return product;
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(num) {
	if(num==0 || num==1)
    return 1;
  let factorial = 1;
  for(let i=1; i<=num; i++)
    factorial *= i;
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
