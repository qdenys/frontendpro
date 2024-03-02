'use strict'

const lengthArray = +prompt('Задайте довжину вашого масива:');
const newArray = [];

for(let i = 1; i <= lengthArray; i++){
	let elementArray = prompt(`Введіть ваш ${i} елемент масиву`);
	newArray.push(elementArray);
}
console.log(`Наш масив: ${newArray}`);
newArray.sort();
console.log(`Наш масив після сортування: ${newArray}`);
newArray.splice(1, 3);
console.log(`Наш масив після видалення елементів: ${newArray}`);

