'use strict';

document.addEventListener('DOMContentLoaded', function (){
	function getUserInfo(){
		const userBirthOfYear = prompt('Введіть ваш рік народження:');

		if (!userBirthOfYear){
			alert('Шкода що Ви не захотіли ввести свій рік народження');
			return;
		}
		if(isNaN(userBirthOfYear)){
			alert('Почніть заново, та введіть коректні дані.');
			return;
		}

		const currentYear = new Date().getFullYear();
		const age = currentYear - userBirthOfYear;
		const city = prompt('Введіть в якому місті ви живете:');

		if (!city){
			alert('Шкода що Ви не захотіли ввести назву міста!');
			return;
		}
		if (!isNaN(city)) {
			alert('Почніть заново, та введіть коректні дані.');
			return;
		}
		const capitals = {
			'Київ': 'України',
			'Вашингтон': 'Сполучених Штатах Америки',
			'Лондон': 'Великобританії'
		}
		let messageCity = `Ти живеш у місті ${city}`;
		if(capitals[city]){
			messageCity = `Ти живеш у столиці ${capitals[city]}`;
		}

		const sport = prompt('Введіть свій улюблений вид спорту:');
		let messageSport;

		if (!sport){
			alert('Шкода що Ви не захотіли ввести свій улюблений вид спорту!');
			return;
		}
		if (!isNaN(sport)) {
			alert('Почніть заново, та введіть коректні дані.');
			return;
		}

		if (sport.toLowerCase() === 'футбол') {
			messageSport = `Круто! Хочеш стати як Михайло Мудрик?`
		} else if (sport.toLowerCase() === 'баскетбол') {
			messageSport = `Круто! Хочеш стати як Майкл Джордан?`
		} else if (sport.toLowerCase() === 'бокс') {
			messageSport = `Круто! Хочеш стати як Александр Усик?`
		} else {
			messageSport = `Круто, твій улюблений спорт це ${sport}`
		}


		alert(`Ваш вік: ${age}\n ${messageCity}\n ${messageSport}`);


	}
	getUserInfo();
});