const name = prompt('What is your name?');
if (name) {
	alert(`Hello, ${name}! How are you?`);
} else if (name === null) {
	alert('Unfortunately, you didn\'t want to write your name :(');
} else {
	alert('Sorry, you didn\'t write your name.');
}