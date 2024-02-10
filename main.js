document.addEventListener('DOMContentLoaded', documentOnReady);

function documentOnReady() {
	createTable();
	document.querySelector('#table-container').innerHTML = createTable();
	numbers();


	function createTable() {
		let table = '<table>';
		for(let i = 0;  i < 10; i++){
			table += '<tr>';
			for (let j = 0; j < 10; j++){
				table += `<td></td>`;
			}
			table += '</tr>';
		}
		return  table;
	}

	function numbers(){
		let startNumber = 1;
		let cells = document.querySelectorAll('#table-container td');
		let index = 0;
		let intervalNumbers = setInterval(() => {
			if(index < cells.length){
				cells[index].innerHTML = (startNumber++).toString();
				index++;
			}else{
				clearInterval(intervalNumbers);
			}
		},50)
	}


}