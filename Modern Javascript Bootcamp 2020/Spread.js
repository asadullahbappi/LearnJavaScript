// Spread

nums = [ 9, 3, 2, 8 ];
console.log(Math.max(nums)); //Returns NaN
console.log(Math.max(...nums)); // returns 9

function givemefour(a, b, c, d) {
	console.log('a', a);
	console.log('b', b);
	console.log('c', c);
	console.log('d', d);
}

const colors = [ 'red', 'orange', 'yellow', 'green' ];

givemefour(colors);
givemefour(...colors);

const oneToFive = [ '1', '2', '3', '4', '5' ];
const sixToTen = [ '6', '7', '8', '9', '10' ];
const elevenToFifteen = [ '11', '12', '13', '14', '15' ];

const oneToTen = [ ...oneToFive, ...sixToTen ];
