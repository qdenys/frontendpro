document.addEventListener('DOMContentLoaded', documentOnReady);

function documentOnReady() {
	let wrapper = document.querySelector('.wrapper');
	wrapper.innerHTML = numberOutput() + numberSquaresOutput() + multiplicationTableForSeven() + sumWholeNumbers() + multWholeNumbers() + arithmeticAverage() + sumOnlyPairedNumbers() + outNumbersMultOfThree() + operationNaturalNumber(100) + printTable();


	//Вивести на сторінку в один рядок через кому числа від 10 до 20.
	function numberOutput() {
		let div = '<div> Вивести на сторінку в один рядок через кому числа від 10 до 20. — ';
		let startNumber = 10;
		let endNumber = 20;
		for (let i = startNumber; i <= endNumber; i++) {
			if (i === endNumber) {
				div += i;
			} else {
				div += i + ', ';
			}
		}
		div += '</div>';
		return div;
	}

	//Вивести квадрати чисел від 10 до 20.
	function numberSquaresOutput() {
		let div = '<div> Вивести квадрати чисел від 10 до 20. — ';
		let startNumber = 10;
		let endNumber = 20;
		for (let i = startNumber; i <= endNumber; i++) {
			if (i === endNumber) {
				div += i * i;
			} else {
				div += (i * i) + ', ';
			}
		}
		div += '</div>';
		return div;
	}

	//Вивести таблицю множення на 7.
	function multiplicationTableForSeven() {
		let table = '<table>';
		for (let i = 1; i <= 10; i++) {
			table += '<tr>';
			table += '<td>' + `${i} * 7 = ${i * 7}` + '</td>';
			table += '</tr>';
		}
		table += '</table>';
		return table;
	}

	//Знайти суму всіх цілих чисел від 1 до 15.
	function sumWholeNumbers() {
		let div = '<div> Знайти суму всіх цілих чисел від 1 до 15. — ';
		let i = 1;
		let result = 0;
		while (i <= 15) {
			result += i;
			switch (i) {
				case 15:
					div += i + ' = ' + result;
					break;
				default:
					div += i + ' + ';
			}
			i++;
		}
		div += '</div>';
		return div;
	}

	//Знайти добуток усіх цілих чисел від 15 до 35.
	function multWholeNumbers() {
		let div = '<div> Знайти добуток усіх цілих чисел від 15 до 35. — ';
		let i = 15;
		let result = 1;
		while (i <= 35) {
			result *= i;
			switch (i) {
				case 35:
					div += i + ' = ' + result;
					break;
				default:
					div += i + ' * ';
			}
			i++;
		}
		div += '</div>';
		return div;
	}

	//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
	function arithmeticAverage() {
		let div = '<div> Знайти середнє арифметичне всіх цілих чисел від 1 до 500. — ';
		let arrayNumbers = [];
		let result = 0;
		let firstNumber = 0;
		let lastNumber = 500;
		for (firstNumber; firstNumber <= lastNumber; firstNumber++) {
			arrayNumbers.push(firstNumber);
			result += arrayNumbers[firstNumber];

		}
		arrayNumbers.shift();
		div += arrayNumbers.join(' + ') + ' = ' + (result / arrayNumbers.length);
		div += '</div>';
		return div;
	}

	//Вивести суму лише парних чисел в діапазоні від 30 до 80.
	function sumOnlyPairedNumbers() {
		let div = '<div> Вивести суму лише парних чисел в діапазоні від 30 до 80. — ';
		let firstNumber = 30;
		let lastNumber = 80;
		let result = 0;
		while (firstNumber <= lastNumber) {
			if (firstNumber % 2 === 0) {
				if (firstNumber + 2 > lastNumber) {
					div += firstNumber + ' = ';
				} else {
					div += firstNumber + ' + ';
				}
				result += firstNumber;
			} else {

			}
			firstNumber++;
		}
		div += result;
		div += '</div>';
		return div;
	}

	//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
	function outNumbersMultOfThree() {
		let div = '<div> Вивести всі числа в діапазоні від 100 до 200 кратні 3. — ';
		let firstNumber = 100;
		let lastNumber = 200;
		let arrayNumbers = [];
		let result;
		for (firstNumber; firstNumber <= lastNumber; firstNumber++) {
			if (firstNumber % 3 === 0) {
				arrayNumbers.push(firstNumber);
			} else {

			}
		}
		result = arrayNumbers.join(', ');
		div += result;
		div += '</div>';
		return div;
	}

	function operationNaturalNumber(naturalNumber) {
		//Дано натуральне число 100. Знайти та вивести на сторінку всі його дільники.
		let div = '<div> Дано натуральне число 100. Знайти та вивести на сторінку всі його дільники. — ';
		// let naturalNumber = 100;
		let firstNumber = 1;
		let arrayNumbers = [];
		let evenNumbers = [];
		let sumEvenNumbers = 0;
		for (firstNumber; firstNumber <= naturalNumber; firstNumber++) {
			if (naturalNumber % firstNumber === 0) {
				arrayNumbers.push(firstNumber);
			} else {
			}
		}
		for (let i = 0; i <= arrayNumbers.length; i++) {
			if (arrayNumbers[i] % 2 === 0) {
				evenNumbers.push(arrayNumbers[i]);
				sumEvenNumbers += arrayNumbers[i];
			}
		}
		div += arrayNumbers.join(', ') + '<br>' + `Визначити кількість його парних дільників. — ${evenNumbers.length}` + '<br>' + `Знайти суму його парних дільників. — ${sumEvenNumbers}`;
		div += '</div>';
		return div;
	}

	//Надрукувати повну таблицю множення від 1 до 10.
	function printTable() {
		let table = '<table>'
		for (let i = 1; i <= 10; i++) {
			table += '<tr>';
			for (let j = 1; j <= 10; j++) {
				table += '<td>' + `${j} * ${i} = ${j * i}` + '</td>';
			}
			table += '</tr>';
		}
		table += '</table>';
		return table;
	}
}

