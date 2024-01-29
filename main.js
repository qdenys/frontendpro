function removeElement(array, item) {
	let itemIndex = array.indexOf(item);
	array.splice(itemIndex, 1);
}


const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);



//Видалення всіх чисел 5 з масиву
// function removeElement(array, numberRemove){
// 	return array.filter(function (number){
// 		return number !== numberRemove;
// 	});
// }
//
//
// const array = [1, 2, 3, 4, 5, 6, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5];
//
// const newArray =  removeElement(array, 5);
// console.log(newArray);