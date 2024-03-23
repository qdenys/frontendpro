'use strict';

document.addEventListener('DOMContentLoaded', function () {
	const array = [1, 2, [1.1, 1.2, 1.3], 3];
	document.querySelector('.wrapper').innerHTML = generateList(array);

	function generateList(array) {
		let list = '<ul>';
		array.forEach(item => {
			if(Array.isArray(item)){
				list += `<li>${generateSubList(item)}</li>`;

			}else{
				list += `<li>${item}</li>`;
			}
		})
		list += '</ul>';
		return list;
	}


	function generateSubList(array){
			let sublist = '<ul>';
		array.forEach(item => {
				sublist += `<li>${item}</li>`;
			});
		sublist += '</ul>';
		return sublist;
	}

});