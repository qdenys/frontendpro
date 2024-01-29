let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
sumAndQuantity(arr);
minElementArray(arr);
maxElementArray(arr);
quantityNegativeNumbers(arr);
quantityOddPositiveNumbers(arr);
quantityEvenPositiveNumbers(arr);
sumEvenPositiveNumbers(arr);
sumOddPositiveNumbers(arr);
multPositiveNumbers(arr);
findLargeNumber(arr);

//1. Знайти суму та кількість позитивних елементів.
function sumAndQuantity(array) {
	let positiveNumber = array.filter(function (element) {
		return element > 0;
	});
	let sum = positiveNumber.reduce(function (accumulator, currentValue) {
		return accumulator + currentValue;
	}, 0);
	console.log(`1. Сума масива: ${sum}, кількість позитивних елементів: ${positiveNumber.length}`);
}

//2. Знайти мінімальний елемент масиву та його порядковий номер.
function minElementArray(array) {
	let minNumber = Math.min(...array);
	let minNumberIndex = array.indexOf(minNumber);
	console.log(`2. Мінімальний елемент масиву: ${minNumber}, та його порядковий номер: ${minNumberIndex}`);
}

//3. Знайти максимальний елемент масиву та його порядковий номер.
function maxElementArray(array) {
	let maxNumber = Math.max(...array);
	let maxNumberIndex = array.indexOf(maxNumber);
	console.log(`2. Максимальний елемент масиву: ${maxNumber}, та його порядковий номер: ${maxNumberIndex}`);
}

//4. Визначити кількість негативних елементів.
function quantityNegativeNumbers(array) {
	let result = 0;

	for (let i = 0; i <= array.length; i++) {
		if (array[i] < 0) {
			result += 1;
		}
	}
	console.log(`4. Кількість негативних елементів — ${result}`);
}


//5. Знайти кількість непарних позитивних елементів.
function quantityOddPositiveNumbers(array) {
	let result = array.reduce(function (accumulator, currentValue) {
		if (currentValue > 0 && currentValue % 2 !== 0) {
			return accumulator + 1;
		}
		return accumulator;
	}, 0);
	console.log(`5. Кількість непарних позитивних елементів: ${result}`);
}

//6. Знайти кількість парних позитивних елементів.
function quantityEvenPositiveNumbers(array) {
	let result = array.reduce(function (accumulator, currentValue) {
		if (currentValue > 0 && currentValue % 2 === 0) {
			return accumulator + 1;
		}
		return accumulator;
	}, 0);
	console.log(`6. Кількість парних позитивних елементів: ${result}`);
}

//7. Знайти суму парних позитивних елементів.
function sumEvenPositiveNumbers(array) {
	let result = array.reduce(function (accumulator, currentValue) {
		if (currentValue > 0 && currentValue % 2 === 0) {
			return accumulator + currentValue;
		}
		return accumulator;
	}, 0);
	console.log(`7. Сума парних позитивних елементів: ${result}`);
}

//8. Знайти суму непарних позитивних елементів.
function sumOddPositiveNumbers(array) {
	let result = 0;
	for (let i = 0; i <= array.length; i++) {
		if (array[i] > 0 && array[i] % 2 !== 0) {
			result += array[i];
		}
	}
	console.log(`8. Сума непарних позитивних елементів: ${result}`);
}

//9. Знайти добуток позитивних елементів.
function multPositiveNumbers(array) {
	let result = array.reduce(function (accumulator, currentValue) {
		if (currentValue > 0) {
			return accumulator * currentValue;
		}
		return accumulator;
	}, 1);
	console.log(`9. Добуток позитивних елементів: ${result}`);
}

//10. Знайти найбільший серед елементів масиву, решту обнулити.
function findLargeNumber(array) {
	let largeNumber = Math.max(...array);
	let newArray = array.map(function (element) {
		if (element !== largeNumber){
			 element = 0;
		}
		return element;
	});
	console.log(`10. Найбільший серед елементів масиву, решту обнулити: ${newArray}`);

}