'use strict';

document.addEventListener('DOMContentLoaded', function () {

	const API_KEY = '36a2311a3794f525c20c76230267a433';
	const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
	const BASE_URL_ICON = 'http://openweathermap.org/img/w/';
	let baseCity = 'Lviv';
	const searchInput = document.querySelector('.searchInput');
	const searchButton = document.querySelector('.searchButton');
	const weatherCity = document.querySelector('.weather__city');
	const weatherTemp = document.querySelector('.weather__temp');
	const weatherDesc = document.querySelector('.weather__description');
	const weatherPress = document.querySelector('.weather__pressure');
	const weatherIcon = document.querySelector('.weather__icon');
	const weatherImg = document.querySelector('.weather__img');
	const weatherSpeed = document.querySelector('.weather__speed');
	const weatherDeg = document.querySelector('.weather__deg');
	const weatherSunrise = document.querySelector('.weather__sunrise');
	const weatherSunset = document.querySelector('.weather__sunset');
	const weatherGusts = document.querySelector('.weather__gusts');
	const weatherFeels = document.querySelector('.weather__feels');
	const weatherCloudiness = document.querySelector('.weather__cloudiness');
	const weatherLon = document.querySelector('.weather__longitude');
	const weatherLat = document.querySelector('.weather__latitude');
	const weatherHumidity = document.querySelector('.weather__humidity');

	function clearHtml(container) {
		container.innerHTML = '';
	}

	function getWeather(city) {
		fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
				.then(response => {
					if (!response.ok) {
						alert('Sorry, Failed to fetch!');
						throw new Error('Failed to fetch!');
					}
					return response.json();
				}).then(data => {
			displayCity(data);
			displayTemp(data);
			displayWeather(data);
			displayPicture(data);
			displayTopHighlights(data);
			displayBottomHighlights(data);
			displayCoord(data);
			displayHumidity(data);
		}).catch(error => {
			console.error(error);
		})
	}

	getWeather(baseCity);

	searchButton.addEventListener('click', () => {
		const currentCity = searchInput.value;
		getWeather(currentCity);
	});

	searchInput.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			const currentCity = searchInput.value;
			getWeather(currentCity);
		}
	});

	function displayCity(data) {
		clearHtml(weatherCity);
		const cityWrapper = document.createElement('div');
		cityWrapper.innerHTML = `${data.name}, ${data.sys.country}`;
		weatherCity.appendChild(cityWrapper);
	}

	function displayTemp(data) {
		clearHtml(weatherTemp);
		const tempWrapper = document.createElement('div');
		const tempInKelvin = data.main.temp;

		function kelvinToCelsius(kelvin) {
			return kelvin - 273.15;
		}

		tempWrapper.innerText = `${Math.round(kelvinToCelsius(tempInKelvin))} °C`;
		weatherTemp.appendChild(tempWrapper);
	}

	function displayWeather(data) {
		clearHtml(weatherDesc);
		const descWrapper = document.createElement('div');
		descWrapper.innerText = data.weather[0].description;
		weatherDesc.appendChild(descWrapper);
	}

	function displayPicture(data) {
		weatherIcon.src = `${BASE_URL_ICON}${data.weather[0].icon}.png`;
		weatherImg.src = `img/${data.weather[0].description}.png`;
	}

	function displayCoord(data){
		clearHtml(weatherLon);
		clearHtml(weatherLat);
		const lonWrapper = document.createElement('div');
		const latWrapper = document.createElement('div');
		lonWrapper.innerHTML=`
		<span>Longitude: ${data.coord.lon}</span>
		<p>Longitude measures distance east or west of the prime meridian.</p>
		`;
		latWrapper.innerHTML=`
	<span>Latitude: ${data.coord.lat}</span>
		<p>Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel to the equator.</p>
		`;
		weatherLon.appendChild(lonWrapper);
		weatherLat.appendChild(latWrapper);
	}

	function displayHumidity(data){
		clearHtml(weatherHumidity);
		const humidityWrapper = document.createElement('div');
		humidityWrapper.innerHTML = `
		<span>Humidity: ${data.main.humidity}</span>
		<p>Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous state of water, is generally invisible to the human eye.</p>
		<p>The same amount of water vapor results in higher relative humidity in cool air than warm air.</p>
		`;
		weatherHumidity.appendChild(humidityWrapper);
	}


	function displayTopHighlights(data) {
		clearHtml(weatherPress);
		clearHtml(weatherSpeed);
		clearHtml(weatherDeg);
		clearHtml(weatherSunrise);
		clearHtml(weatherSunset);

		const pressWrapper = document.createElement('div');
		const speedWrapper = document.createElement('div');
		const degWrapper = document.createElement('div');
		const sunriseWrapper = document.createElement('div');
		const sunsetWrapper = document.createElement('div');
		const pressureInhPa = data.main.pressure;

		pressWrapper.innerText = `${Math.floor(hPaToMmHg(pressureInhPa))} mm`;
		speedWrapper.innerText = `${data.wind.speed} m/s`;
		degWrapper.innerText = `${data.wind.deg} deg`;
		sunriseWrapper.innerHTML = `
				<span>Sunrise</span>
			${timeTransfer(data.sys.sunrise)}`;
		sunsetWrapper.innerHTML = `
				<span>Sunset</span>
			${timeTransfer(data.sys.sunset)}`;
		function hPaToMmHg(hPa) {
			return hPa * 0.75006375541921;
		}

		weatherSpeed.appendChild(speedWrapper);
		weatherDeg.appendChild(degWrapper);
		weatherSunrise.appendChild(sunriseWrapper);
		weatherSunset.appendChild(sunsetWrapper);
		weatherPress.appendChild(pressWrapper);
	}

	function displayBottomHighlights(data){
		clearHtml(weatherGusts);
		clearHtml(weatherFeels);
		clearHtml(weatherCloudiness);

		const gustsWrapper = document.createElement('div');
		const feelsWrapper = document.createElement('div');
		const cloudinessWrapper = document.createElement('div');
		const tempInKelvin = data.main.feels_like;

		function kelvinToCelsius(kelvin) {
			return kelvin - 273.15;
		}

		gustsWrapper.innerHTML = `${data.wind.gust} m/s`;
		feelsWrapper.innerHTML = `${Math.round(kelvinToCelsius(tempInKelvin))} °C`;
		cloudinessWrapper.innerHTML = `${data.clouds.all} %`;
		weatherGusts.appendChild(gustsWrapper);
		weatherFeels.appendChild(feelsWrapper);
		weatherCloudiness.appendChild(cloudinessWrapper);
	}

	function timeTransfer(data) {
		const time = new Date(data * 1000);

		function pad(number) {
			return (number < 10 ? '0' : '') + number;
		}

		const hours = pad(time.getUTCHours());
		const minutes = pad(time.getUTCMinutes());
		const seconds = pad(time.getUTCSeconds());

		return hours + ':' + minutes + ':' + seconds;
	}

});







