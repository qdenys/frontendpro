function externalFunction() {
	let counter = 0;
  function internalFunction(num) {
		return counter += num;
	}
	return internalFunction;
}


let outputCounter = externalFunction();

console.log(outputCounter(3));
console.log(outputCounter(5));
console.log(outputCounter(20));


