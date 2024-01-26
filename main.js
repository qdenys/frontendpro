let numberOfHours = prompt('Введіть кількість годин:');
calculatingSeconds(numberOfHours);

function calculatingSeconds(hours) {
	let seconds = 60;
	let minutes = 60;

	if (hours === '0') {
		alert('Ви ввели 0');
	} else if (!isNaN(+hours) && +hours !== 0) {
		seconds *= hours * minutes;
		alert(seconds);
	} else if (hours === null || hours.trim() === '') {
		alert('Ви нажали скасувати, або відправили пусту строку');
	} else {
		alert('Вам треба ввести число!');
	}

}