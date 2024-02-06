document.addEventListener('DOMContentLoaded', function () {
	createElement();


	function createElement (){
		const pageElement = document.querySelector('.page');
		const textBlock = document.getElementById('text-block');
		const newElement = document.createElement('div');
		newElement.classList.add('new-element');

		textBlock.addEventListener('mouseenter',()=>{
			newElement.classList.add('show');
			pageElement.appendChild(newElement);
		});

		textBlock.addEventListener('mouseleave',()=>{
			pageElement.removeChild(newElement);
		});
	}

});
