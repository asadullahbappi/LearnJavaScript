// For Each Function

//simple for each function
const number = [ 20, 21, 22, 23, 24, 25, 26, 27 ];

number.forEach(function(num) {
	console.log(num);
});

//Reusable for each function

function printTriple(x) {
	console.log(x * 3);
}
number.forEach(printTriple);

number.forEach(function(num, idx) {
	console.log(idx + 1, num);
});

// Example

const books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 4.25
	},
	{
		title: 'Bone : The Complete Edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42
	},
	{
		title: 'American Gods',
		authors: [ 'Neil Gaiman' ],
		rating: 4.11
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amor Towel' ],
		rating: 4.36
	}
];

books.forEach(function(book) {
	console.log(book.title.toUpperCase());
});

const texts = [ 'rofl', 'lol', 'omg', 'ttyl' ];

const caps = texts.map(function(t) {
	return t.toUpperCase();
});

//Example

const number = [ 20, 21, 22, 23, 24, 25, 26, 27 ];
const words = [ 'asap', 'byob', 'rsvp', 'diy' ];

//Example Double the number array
const doubles = number.map(function(num) {
	return num * 2;
});
// Example find out which number is even(true/false) and capture it in an array
const numdetail = number.map(function(n) {
	return {
		value: n,
		isEven: n % 2 === 0
	};
});

// Example Map words array in a new array with each word separated by a dot

const splitjoin = words.map(function(w) {
	return w.toUpperCase().split('').join('.');
});

// Example Map tittle of books in a new array

const title = books.map(function(b) {
	return b.title;
});
