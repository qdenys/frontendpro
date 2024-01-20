let mathSymbol = prompt('Який математичний символ ви хочете використати (+, -, *, /) ?');
let firstNumber = +prompt('Введіть будь ласка перше число:');
let secondNumber = +prompt('Введіть будь ласка друге число:');
let result;

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
	switch (mathSymbol) {
		case '+':
			result = firstNumber + secondNumber;
			alert(`${firstNumber} + ${secondNumber} = ${result}`);
			break;
		case '-':
			result = firstNumber - secondNumber;
			alert(`${firstNumber} - ${secondNumber} = ${result}`);
			break;
		case '*':
			result = firstNumber * secondNumber;
			alert(`${firstNumber} * ${secondNumber} = ${result}`);
			break;
		case '/':
			if (secondNumber === 0) {
				alert(`${firstNumber} / ${secondNumber} = На нуль ділити не можна:)`);
			} else {
				result = firstNumber / secondNumber;
				alert(`${firstNumber} / ${secondNumber} = ${result}`);
			}
			break;
		default:
			alert('Введіть будь ласка знак!');
	}
} else {
	alert('Будь ласка, введіть коректні числа!');
}
