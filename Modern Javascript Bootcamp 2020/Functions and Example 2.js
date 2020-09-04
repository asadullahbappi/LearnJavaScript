// Functions and Example 2

// Example 9
// Write a isValidPassword function
// It accepts two arguments: Password and username
//Passwor must:
// ~ be at least 8 characters
// ~ cannot cantain spaces
// ~cannot contain the username

// if all requirements are met, return true,
// otherwise return false,

function isValidPassword(username, password) {
	if (password.length >= 8 && password.indexOf(' ') === -1 && password.indexOf('username') === -1) {
		return true;
	}
	return false;
}

//Example 10 Average

function avg(arr) {
	let total = 0;
	for (let A of arr) {
		total += A;
	}
	console.log(total / arr.length);
}

//Example 11
// 'the five boxing wizards jump quickly'

function isPangram(str) {
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (str.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}

//Example 12
// write a getCard() function which returns a random playing card Object, like:
//       {
// 		  valuse : 'K',
// 		  suit : 'Clubs'
// 	  }
// Pick a random value from:
// -----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
// Pick arandom suit from :
// ------ clubs, spades, hearts, diamonds
// return both in an object

function getCard() {
	const values = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
	const validx = Math.floor(Math.random() * values.length);
	const value = values[validx];

	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	const suitidx = Math.floor(Math.random() * suits.length);
	const suit = suits[suitidx];
	return {
		value: value,
		suit: suit
	};
}
