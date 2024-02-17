'use strict'

//Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
function lineOutput() {
	let result = '';

	for (let i = 1; i < 4; i++) {
		let str = prompt(`Введіть ${i} строку`);
		result += str + ' ';
	}
	console.log(result);
}
lineOutput();



// Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
function numberOutput(number) {
	let arrayNumbers  = number.toString().split('');
	let result = arrayNumbers .join(' ');
	console.log(result);
}
numberOutput(54321);
