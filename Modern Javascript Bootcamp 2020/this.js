// WORD this

function sayHi() {
	console.log('Hi');
	console.log(this); //becomes value of Windows
}
const greet = function() {
	console.log(this); //becomes value of Windows
};

const person = {
	first: 'Cherilyn',
	last: 'Sarkisian',
	nickName: 'Cher',
	fullName() {
		const { first, last, nickname } = this;
		console.log(`${first} ${last} AKA  ${nickname}`); //Prints whole
	}
};
