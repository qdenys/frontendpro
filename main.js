let numOrStr = prompt('input number or string');

console.log(numOrStr);


switch (true) {
	case numOrStr === null:
		console.log('ви скасували');
		break;
	case numOrStr.trim() === '' :
		console.log('Empty String');
		break;
	case !isNaN(numOrStr) :
		console.log('OK!');
		break;
	default:
		console.log('number is Ba_NaN');
}
