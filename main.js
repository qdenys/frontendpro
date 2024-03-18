document.addEventListener('DOMContentLoaded', function () {

	const categoryWrapper = document.querySelector('.col--left');
	const bookListWrapper = document.querySelector('.col--middle');
	const infoWrapper = document.querySelector('.col--right');
	const modal = document.querySelector('.modal');
	const modalClose = document.querySelector('.modal__close');
	const order = document.querySelector('.order');
	const overlay = document.querySelector('.overlay');
	const form = document.querySelector('.form');
	const formSubmit = document.querySelector('.form__submit');

	const onlineShopData = [
		{
			category: 'detectives',
			books: [{
				name: 'Rebecca',
				info: 'This is the story of a girl who meets a British aristocrat named Maximilian in Monte Carlo, a widower whose wife died while sailing on a yacht. The heroine moves to Maximillian\'s mansion in Cornwall, where she encounters the hostility of the local companion and servants and constantly feels the spirit of her dead wife in the house.',
				author: 'Daphne Demurier'
			}, {
				name: 'Murder on the Orient Express',
				info: 'The story follows amateur sleuth Antoinette Marceau and her investigation into a murder with twelve possible suspects aboard the Orient Express, which is blocked by an avalanche in Yugoslavia in 1934.',
				author: 'Agatha Christie'
			}]
		},
		{
			category: 'fantastic',
			books: [{
				name: 'Solaris',
				info: 'The book tells the story of psychologist Chris Kelvin, who arrived on the planet Solaris to study the ocean. After all, scientists have every reason to believe that this is one big intelligent being.',
				author: 'Stanislav Lem'
			}, {
				name: 'A Song of Ice and Fire',
				info: 'This is an epic in the fantasy genre, which tells about the world of Westeros, where several noble houses compete for the throne of the Seven Kingdoms. And while the nobles figure out the relationship, an army of the living dead is gathering in the north, led by the Night King.',
				author: 'George RR Martin'
			}]
		},
		{
			category: 'artistic',
			books: [{
				name: '1984',
				info: 'A dystopian novel that describes life under a totalitarian regime, where every step of a person is controlled by the authorities. “1984” is a thought-provoking book that allows you to look at issues more broadly, drawing parallels with reality and establishing a cause-and-effect relationship.',
				author: 'George Orwell'
			}, {
				name: 'The Divine Comedy',
				info: 'The story of a journey through the afterlife was written between 1308 and 1321, but remains relevant to this day. The pinnacle of Italian poetry and a cult work on philosophical and fantastic themes is the subject of study by many contemporaries.',
				author: 'Dante Alighieri'
			}]
		},
		{
			category: 'scientific',
			books: [{
				name: 'Sixth extinction',
				info: 'What makes the current mass extinction different from the five that the Earth has already experienced in the last 500 million years? The fifth, which destroyed all atypical dinosaurs, was caused by an asteroid impact. Now, leading scientists say, we humans are an asteroid.',
				author: 'Elizabeth Kolbert'
			}, {
				name: 'Between the World and Me',
				info: 'This thought-provoking work delves into American history and presents a powerful new framework for understanding the nation\'s current crisis. Through personal narratives and reimagined history, the author addresses the falsehood of "race" and its damaging effects on black men and women.',
				author: 'Ta-Nehisi Coates'
			}]
		},
	];

	onlineShopData.forEach(item => {
		const category = document.createElement('div');
		category.innerText = item.category;
		categoryWrapper.appendChild(category);
		category.addEventListener('click', () => {
			displayBooks(item.books);
		})
	});

	function displayBooks(booksArr) {
		clearContainer(bookListWrapper);
		booksArr.forEach(item => {
			const book = document.createElement('div');
			book.innerText = item.name;
			bookListWrapper.appendChild(book);
			book.addEventListener('click', () => {
				displayInfoBooks(item, bookListWrapper);
			})
		})
	}

	function displayInfoBooks(BooksArr, list) {
		clearContainer(infoWrapper);
		const info = document.createElement('div');
		const author = document.createElement('div');
		const buttonBuy = document.createElement('button');
		buttonBuy.classList.add('btn');
		buttonBuy.innerText = 'Buy this book';
		info.innerText = BooksArr.info;
		author.innerText = `Author: ${BooksArr.author}`;
		infoWrapper.appendChild(info);
		infoWrapper.appendChild(author);
		infoWrapper.appendChild(buttonBuy);
		buttonBuy.addEventListener('click', () => {
			popUp(BooksArr);
			clearContainer(infoWrapper);
			clearContainer(list);
		})
	}

	function popUp(BooksArr) {
		overlay.classList.add('active');
		modal.classList.add('active');

		modalClose.addEventListener('click', () => {
			modal.classList.remove('active');
			overlay.classList.remove('active');
			form.reset();
			const requiredInputText = form.querySelectorAll('input[type="text"][required]');
			const requiredInputNumber = form.querySelectorAll('input[type="number"][required]');
			requiredInputText.forEach(item => {
				if (item.classList.contains('novalid')) {
					item.classList.remove('novalid');
				}
			});
			requiredInputNumber.forEach(item => {
				if (item.classList.contains('novalid')) {
					item.classList.remove('novalid');
				}
			});
		});
		formSubmit.addEventListener('click', function (event) {
			event.preventDefault();
			formValidation(BooksArr);
		});
	}


	function formValidation(BooksArr) {
		let isValid = true;

		const clientName = document.querySelector('#clientName');
		const clientSurname = document.querySelector('#clientSurname');
		const clientPatronymic = document.querySelector('#clientPatronymic');
		const clientCity = document.querySelector('#clientCity');
		const clientPost = document.querySelector('#clientPost');
		const clientComments = document.querySelector('#comment');
		const requiredInputRadio = document.querySelector('input[type="radio"]:checked');
		const requiredInputText = form.querySelectorAll('input[type="text"][required]');
		const requiredInputNumber = form.querySelectorAll('input[type="number"][required]');
		const orderInfo = document.createElement('div');
		const clientInfo = document.createElement('div');
		requiredInputText.forEach(item => {
			if (item.value === '' || !item.value.match(/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ\s]+$/)) {
				item.classList.add('novalid');
				isValid = false;
			} else {
				item.classList.remove('novalid');
			}
		});

		requiredInputNumber.forEach(item => {
			if (item.value === '') {
				item.classList.add('novalid');
				isValid = false;
			} else {
				item.classList.remove('novalid');
			}
		});

		if (isValid) {
			clearContainer(order);
			const orderClose = document.createElement('div');
			orderClose.classList.add('order__close');
			modal.classList.remove('active');
			order.classList.add('active');
			orderClose.addEventListener('click', () => {
				order.classList.remove('active');
				overlay.classList.remove('active');
			});
			orderInfo.innerHTML = `
				<h2>Ваше замовлення:</h2>
				<div>${BooksArr.name} — Назва книги</div>
				<div>${BooksArr.author} — Автор книги</div>
			`;
			clientInfo.innerHTML = `
				<h2>Інформація про кліента:</h2>
				<div>ПІБ: ${clientName.value} ${clientSurname.value} ${clientPatronymic.value}</div>
				<div>Місто: ${clientCity.value}</div>
				<div>Кількість продукції: ${clientPost.value}</div>
				<div>Оплата: ${requiredInputRadio.value}</div>
				<div>Комментар: ${clientComments.value}</div>
			`;
			order.appendChild(orderClose);
			order.appendChild(orderInfo);
			order.appendChild(clientInfo);
			form.reset();
		}
	}

	form.querySelectorAll('input[type="text"][required]').forEach(item => {
		item.addEventListener('input', () => {
			if (item.value.match(/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ\s]+$/)) {
				item.classList.remove('novalid');
			} else {
				item.classList.add('novalid');
			}
		});
	});

	form.querySelectorAll('input[type="number"][required]').forEach(item => {
		item.addEventListener('input', () => {
			if (!isNaN(item.value) && item.value.trim() !== '') {
				item.classList.remove('novalid');
			} else {
				item.classList.add('novalid');
			}
		});
	});

	function clearContainer(container) {
		container.innerHTML = '';
	}
});