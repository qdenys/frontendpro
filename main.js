'use strict'

document.addEventListener('DOMContentLoaded', function () {
	// Перший варіант
	function slider() {
		const btnPrev = document.querySelector('.btn-prev');
		const btnNext = document.querySelector('.btn-next');
		const slideImage = document.querySelectorAll('.myImg');
		let currentIndex = 1;

		btnNext.addEventListener('click', () => {
			if (currentIndex < slideImage.length) {
				slideImage[currentIndex - 1].classList.remove('active');
				slideImage[currentIndex].classList.add('active');
				currentIndex++;
			}
			if (currentIndex === slideImage.length) {
				btnNext.classList.add('disabled')
			}
			if (currentIndex > 1) {
				btnPrev.classList.remove('disabled');
			}
		});

		btnPrev.addEventListener('click', () => {
			if (currentIndex > 1) {
				currentIndex--;
				slideImage[currentIndex].classList.remove('active');
				slideImage[currentIndex - 1].classList.add('active');
			}

			if (currentIndex < slideImage.length) {
				btnNext.classList.remove('disabled');
			}
			if (currentIndex === 1) {
				btnPrev.classList.add('disabled');
			}

		});

	}

	slider();

	// Другий варіант
	const arrImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

	function newSlider(imagesArr) {
		const buttonPrev = document.querySelector('.button-prev');
		const buttonNext = document.querySelector('.button-next');
		let image = document.querySelector('#myImg');
		let currentIndex = 0;

		function slideUpdate() {
			image.src = `img/${imagesArr[currentIndex]}`;
			buttonPrev.classList.toggle('disabled', currentIndex === 0);
			buttonNext.classList.toggle('disabled', currentIndex === imagesArr.length - 1);
		}

		buttonNext.addEventListener('click', () => {
			if (currentIndex < imagesArr.length) {
				currentIndex++;
			}
			slideUpdate();
		});
		buttonPrev.addEventListener('click', () => {
			if (currentIndex > 0) {
				currentIndex--;
			}
			slideUpdate();
		});
		slideUpdate();

	}

	newSlider(arrImages);


});