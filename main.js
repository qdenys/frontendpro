'use strict'

document.addEventListener('DOMContentLoaded', function () {
	const smiles = [
		{
			smile: '😑',
			vote_count: 0
		},
		{
			smile: '😐',
			vote_count: 0
		},
		{
			smile: '😏',
			vote_count: 0
		},
		{
			smile: '😊',
			vote_count: 0
		},
		{
			smile: '😎',
			vote_count: 0
		},
		{
			smile: '😎',
			vote_count: 0
		}
	]
	votingOutput(smiles);


	function votingOutput(reactions) {
		const list = document.querySelector('#reactions_list');
		reactions.forEach(item => {
			let reactionWrapper = document.createElement('div');
			const reactionSmile = document.createElement('span');
			const countSpan = document.createElement('span');
			reactionWrapper.classList.add('reactions_item');
			reactionSmile.textContent = item.smile;
			countSpan.textContent = item.vote_count;
			reactionWrapper.appendChild(reactionSmile);
			reactionWrapper.appendChild(countSpan);
			list.appendChild(reactionWrapper);

			reactionSmile.addEventListener('click', () => {
				item.vote_count += 1;
				countSpan.textContent = item.vote_count;

			})
		})
	}
})



