'use strict'

document.addEventListener('DOMContentLoaded', function () {

	function imageOutput() {
		let image = document.querySelector('#myImage');

		document.querySelector('#myButton')
				.addEventListener('click', () => {
					image.src = `./img/${Math.floor((Math.random() * 9) + 1)}.jpg`;
				});
	}

	imageOutput();
});