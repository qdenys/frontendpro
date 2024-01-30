const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {
	let result = '';
	let min = 0;
	let max = characters.length - 1;
	for (let i = 0; i < length; i++) {
		let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
		result += characters[randomNumber];
	}
	return result;
}

const key = generateKey(16, characters);
console.log(key);
