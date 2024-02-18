'use strict'

document.addEventListener('DOMContentLoaded', function () {
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
			if (currentIndex === slideImage.length){
				btnNext.classList.add('disabled')
			}
			if(currentIndex > 1){
				btnPrev.classList.remove('disabled');
			}
		});

		btnPrev.addEventListener('click', ()=> {
			if(currentIndex > 1){
				currentIndex--;
				slideImage[currentIndex].classList.remove('active');
				slideImage[currentIndex - 1].classList.add('active');
			}

			if(currentIndex < slideImage.length){
				btnNext.classList.remove('disabled');
			}
			if(currentIndex === 1){
				btnPrev.classList.add('disabled');
			}

		});

	}

	slider();
});