let firstNumber = parseFloat(prompt('Введіть перше число:'));
let secondNumber = parseFloat(prompt('Введіть друге число:'));
let thirdNumber = parseFloat(prompt('Введіть трете число:'));

if (!isNaN(firstNumber) && !isNaN(secondNumber) && !isNaN(thirdNumber)) {
	let arithmeticMean = (firstNumber + secondNumber + thirdNumber) / 3;

	alert(`Середнє арифметичне цих чисел дорівнює: ${arithmeticMean}`);
} else {
	alert('Введіть будь ласка тільки числа');
}
