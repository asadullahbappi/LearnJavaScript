// Arrow function

// syntax
const number = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
const square = (x) => {
	return x * x;
};

const sum = (x, y) => {
	return x + y;
};

const double = number.map((n) => {
	return n * 2;
});

const double3 = number.map((n) => n * 2);

const patylist = number.map(function(n) {
	if (n % 2 === 0) return 'even';
	return 'odd';
});

// Array find function

let movies = [ 'The Fantastic Mr. Fox', 'Mr. and Mrs. Asad', 'Mr. and Mrs. Smith', 'Mrs. Doubtfire', 'Mr. Deeds' ];

const search = movies.find(function(search) {
	return search.includes('Mrs');
});

const book = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 4.25,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'Changing My Mind',
		authors: [ 'Zadie Smith' ],
		rating: 3.83,
		genres: [ 'notification', 'essays' ]
	},
	{
		title: 'Bone : The Complete Edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42,
		genres: [ 'fiction', 'graphical noval', 'fantasy' ]
	},
	{
		title: 'American Gods',
		authors: [ 'Neil Gaiman' ],
		rating: 4.11,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amor Towel' ],
		rating: 4.36,
		genres: [ 'fiction', 'historical fiction' ]
	},
	{
		title: 'The Name of the Wind',
		authors: [ 'Patric Rothfuss' ],
		rating: 4.54,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'The Overstory',
		authors: [ 'Richar Powers' ],
		rating: 4.19,
		genres: [ 'fiction', 'short stories' ]
	},
	{
		title: 'The way of Kings',
		authors: [ 'Brandon Sanderson' ],
		rating: 4.65,
		genres: [ 'fiction', 'epic' ]
	},
	{
		title: 'Lord of the Files',
		authors: [ 'Wilian Golding' ],
		rating: 3.67,
		genres: [ 'fiction' ]
	}
];

const goodbook = book.find((b) => b.rating >= 4.3);

// filer

const nums = [ 34, 35, 67, 54, 109, 102, 32, 9 ];
const odds = nums.filter((n) => n % 2 === 1);
const even = nums.filter((n) => n % 2 === 0);
const greaterNums = nums.filter((n) => n > 50);

const books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 4.25,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'Changing My Mind',
		authors: [ 'Zadie Smith' ],
		rating: 3.83,
		genres: [ 'notification', 'essays' ]
	},
	{
		title: 'Bone : The Complete Edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42,
		genres: [ 'fiction', 'graphical noval', 'fantasy' ]
	},
	{
		title: 'American Gods',
		authors: [ 'Neil Gaiman' ],
		rating: 4.11,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amor Towel' ],
		rating: 4.36,
		genres: [ 'fiction', 'historical fiction' ]
	},
	{
		title: 'The Name of the Wind',
		authors: [ 'Patric Rothfuss' ],
		rating: 4.54,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'The Overstory',
		authors: [ 'Richar Powers' ],
		rating: 4.19,
		genres: [ 'fiction', 'short stories' ]
	},
	{
		title: 'The way of Kings',
		authors: [ 'Brandon Sanderson' ],
		rating: 4.65,
		genres: [ 'fiction', 'epic' ]
	},
	{
		title: 'Lord of the Files',
		authors: [ 'Wilian Golding' ],
		rating: 3.67,
		genres: [ 'fiction' ]
	}
];

// const goodbooks = books.filter((b) => b.rating > 4.3);
// const fantasybooks = books.filter((book) => {
// 	books.genres.includes('fantasy');
// });

// const query = 'The';
// const results = books.filter((book) => {
// 	const title = boo.title.tolowerCase();
// 	return title.includes(query.toLowerCase());
// });

// Ever and some function in array.

const words = [ 'dog', 'dig', 'log', 'bag', 'wag' ];

const all3letter = words.every((word) => {
	word.length === 3;
});

//Sorting

const prices = [ 400.5, 3000, 99.99, 35.99, 12, 9500 ];

const ascsort = prices.sort((a, b) => a - b);
const dessort = prices.sort((a, b) => b - a);

// Reduce

const num = [ 3, 5, 7, 9, 11 ];

const reduce = num.reduce((a, b) => {
	return a + b;
});
