let firstNumber = +prompt('Введіть будь ласка перше число:');
let secondNumber = +prompt('Введіть будь ласка друге число:');


if (!isNaN(firstNumber) || !isNaN(secondNumber)) {
	let add = firstNumber + secondNumber;
	let sub = firstNumber - secondNumber;
	let mult = firstNumber * secondNumber;
	let div;

	if (secondNumber === 0) {
		div = 'На нуль ділити не можна:)';
	} else {
		div = firstNumber / secondNumber;
	}

	alert(`${firstNumber} + ${secondNumber} = ${add}\n${firstNumber} - ${secondNumber} = ${sub}\n${firstNumber} * ${secondNumber} = ${mult}\n${firstNumber} / ${secondNumber} = ${div}`);
} else {
	alert('Введіть будь ласка числа!');
}