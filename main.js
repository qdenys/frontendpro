document.addEventListener('DOMContentLoaded', function () {
	const url = 'https://jsonplaceholder.typicode.com';
	const postList = document.querySelector('#postList');
	const postInfo = document.querySelector('#postInfo');
	const searchInput = document.querySelector('#search-input');
	const searchButton = document.querySelector('#search-button');
	let postData = [];
	let commentsData = [];
	let areCommentsShown = false;
	function findPost(postArr) {
		areCommentsShown = false;
		postInfo.innerHTML = '';
		let searchPostId = parseInt(searchInput.value);
		if (searchPostId > 100) {
			postInfo.innerText = 'Not found post';
			return;
		}
		let filteredPosts = postArr.filter((post) => {
			return post.id === searchPostId;
		})
		if (filteredPosts.length > 0) {
			showPostInfo(filteredPosts);
		} else {
			postInfo.innerText = 'Not found post';
		}
	}

	function showPostInfo(filteredPosts) {
		const foundPost = document.createElement('div');
		const commentsPost = document.createElement('button');
		commentsPost.classList.add('commentsButton');
		commentsPost.innerText = 'Comments';
		commentsPost.addEventListener('click', () => getPostComments(filteredPosts[0].id));
		foundPost.innerText = filteredPosts[0].title;
		postInfo.appendChild(foundPost);
		postInfo.appendChild(commentsPost);
	}

	function showAllPost(postArr) {
		postList.innerHTML = '';
		postArr.forEach(post => {
			const tempPost = document.createElement('div');
			tempPost.innerText = post.title;
			postList.appendChild(tempPost);
		})
	}
	function showAllComments(commentsArr) {
		if (!areCommentsShown) {
			commentsArr.forEach(comment => {
				const tempComment = document.createElement('div');
				tempComment.innerText = comment.body;
				postInfo.appendChild(tempComment);
			})
			areCommentsShown = true;
		}
	}

	function getPostComments(postId) {
		fetch(url + `/posts/${postId}/comments1`)
				.then(response => response.json())
				.then(data => {
					commentsData = data;
					showAllComments(commentsData);
				}).catch(error =>{
			console.log('Error fetching post comments:', error);
			postInfo.innerText = 'Error loading comments';
		})
	}

	function getAllPost() {
		fetch(url + '/posts')
				.then(response => response.json())
				.then(data => {
					postData = data;
					showAllPost(postData);
					searchButton.addEventListener('click', () => findPost(postData));
				}).catch(error =>{
			console.log('Error fetching posts:', error);
			postList.innerText = 'Error loading posts';
		})
	}


	getAllPost();


});

