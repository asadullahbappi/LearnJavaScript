// for of Loop

//Example 1

let subreddits = [ 'soccr', 'popheads', 'cringe', 'books' ];

for (let sub of subreddits) {
	console.log(sub);
}

//Example 2
let characters = 'Asadullah';

for (let char of characters) {
	console.log(char);
}

// Example 3

const magicSquare = [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ];

for (let row of magicSquare) {
	let sum = 0;
	for (let nums of row) {
		sum += nums;
	}
	console.log(`${row} summed to ${sum}`);
}

// for of loop for Object
const moviesReview = {
	Arrival: 9.4,
	Alien: 9,
	Amelie: 8,
	'In Burgers': 9,
	Amadeus: 10,
	'Kill Bill': 8,
	'Little Miss Sunshine': 8.5,
	Coraline: 7.5
};

for (let movie of Object.keys(moviesReview)) {
	console.log(movie, moviesReview[movie]);
}

const ratings = Object.values(moviesReview);
total = 0;
for (let sum of ratings) {
	total += sum;
}
let avg = total / ratings.length;

console.log(avg);
