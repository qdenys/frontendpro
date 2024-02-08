'use strict';

//1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const array = [1, true, 2, 3, false, 'hello world', 4, 5, '55'];

function getAverage(arr) {
	const newArray = arr.filter((item) => {
		return typeof item === 'number'
	});
	const sumNumber = newArray.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);
	const average = sumNumber / newArray.length;
	console.log(`Середнє арифметичне лише числових елементів даного масиву складає: ${average}`);
}

getAverage(array);

//2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let firstNumber = +prompt('Введіть будь ласка своє перше число:');
let sign = prompt('Введіть будь ласка свій математичний знак(+, -, *, /, %, ^):');
let secondNumber = +prompt('Введіть будь ласка своє друге число:');

function doMath(x, znak, y) {
	let result = 0;
	if (isNaN(x) || isNaN(y)) {
		alert('Ви ввели не число, повторіть спробу!');
		return;
	}
	switch (znak) {
		case '+':
			result = x + y;
			break;
		case '-':
			result = x - y;
			break;
		case '*':
			result = x * y;
			break;
		case '/':
			result = x / y;
			break;
		case '%':
			result = x % y;
			break;
		case '^':
			result = Math.pow(x, y);
			break;
		default:
			alert('Ви ввели не знак, повторіть спробу!');
			return;
	}
	console.log(`Ваше перше число ${x}, ваше друге число ${y}, ваш математичний знак ${znak}. Результатом буде: ${result}`)

}

doMath(firstNumber, sign, secondNumber);


//3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function fillArray() {
	let lengthMainArray = +prompt('Введіть будь ласка довжину основного масиву:');
	const mainArray = new Array(lengthMainArray);

	for (let i = 0; i < lengthMainArray; i++) {
		let lengthInnerArray = +prompt(`Введіть будь ласка довжину внутрішнього масиву №${i + 1}:`);
		const innerArray = new Array(lengthInnerArray);

		for (let j = 0; j < lengthMainArray; j++) {
			innerArray[j] = prompt(`ведіть значення елементу №${j + 1} внутрішнього масиву №${i + 1}:`);
		}
		mainArray[i] = innerArray;
	}
	return mainArray;
}

const resultArray = fillArray();
console.log(resultArray);


//4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let str = prompt('Введіть свій рядок:');
let character = prompt('Введіть символи які треба прибрати з рядка:');
const characterArray = character.split('').map(function (item) {
	return item;
});

function clearStr(string, symbol) {
	let result = '';
	for (let i = 0; i < string.length; i++) {
		if (!symbol.includes(string[i])) {
			result += string[i];
		}
	}

	console.log(`Ваш новий рядок: ${result}`);
}

clearStr(str, characterArray);