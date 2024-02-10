'use strict';


//1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
function outputNumbers() {
	let str = '';
	let startNumber = 20;
	while (startNumber <= 30) {
		str += startNumber + ' ';
		startNumber += 0.5;
	}
	console.log(`Вивести числа від 20 до 30 через пропуск: ${str}`);
}

outputNumbers();


//2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

function converter() {
	let str = '';
	let dollarToHryvnia = 27;
	let finalDollarValue = 100;
	let initialDollarValue = 10;
	for (initialDollarValue; initialDollarValue <= finalDollarValue; initialDollarValue += 10) {
		if (initialDollarValue === finalDollarValue) {
			str += initialDollarValue.toString() + '$ —' + ' ' + (initialDollarValue * dollarToHryvnia).toString();

		} else {
			str += initialDollarValue.toString() + '$ —' + ' ' + (initialDollarValue * dollarToHryvnia).toString() + ', ';
		}
	}
	console.log(`Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів: ${str}`);

}

converter();


//3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

function integerNumber(number) {
	const numbers = [];
	for (let i = 1; i <= 100; i++) {
		if (Math.pow(i, 2) < number) {
			numbers.push(i);
		}
	}
	let str = numbers.join(', ')
	console.log(`Дане ціле число: ${number}, виводим всі цілі числа від 1 до 100, квадрат яких не перевищує числа ${number} — ${str}`);
}

integerNumber(550);


//4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

function isSimpleNumber(number) {

	if (number <= 1) {
		return console.log(`Число — ${number} повинно бути більше 1`);
	}

	for (let i = 2; i * i <= number; i++) {
		if (number % i === 0) {
			return console.log(`Число — ${number} не просте`);
		}
	}
	console.log(`Число — ${number} просте`);
}

isSimpleNumber(11);

//5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

function isPowerOfThree(number) {
	let powerBase = 3;
	for (let i = 1; Math.pow(powerBase, i) <= number; i++) {
		if (Math.pow(powerBase, i) === number) {
			console.log(`Так, число — ${number} можна отримати шляхом зведення числа 3 у ступінь ${i}`);
			return;
		}
	}
	console.log(`Ні, число — ${number} не можна отримати шляхом зведення числа 3 у деякий ступінь`);
}

isPowerOfThree(13);