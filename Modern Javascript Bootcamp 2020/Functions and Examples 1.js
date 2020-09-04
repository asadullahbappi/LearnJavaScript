// Functions and Example 1

//Example 1
function rollDice() {
	const roll = Math.floor(Math.random() * 6) + 1;
	console.log(roll);
}

rollDice();

//Example 2
function greet(person) {
	console.log(`Hi, ${person}`);
}

greet('Asad');
greet('Mohib');

//Example 3

function throwDice(num) {
	for (let i = 0; i < num; i++) {
		rollDice();
	}
}
throwDice(3);

//Example 4

function add(x, y) {
	console.log(x + y);
}
add(3, 4);
//Example 5

function sum(x, y) {
	return x + y;
}
sum(3, 4);

//Example 6

function isBlue(color) {
	if (color.toLowerCase() === 'pink') {
		return true;
	} else {
		return false;
	}
}
//Example 7

function isYellow(color) {
	return color.toLowerCase() === 'yellow';
}
//Example 8

function containsPurple(arr) {
	for (let color of arr) {
		if (color.toLowerCase() === 'purple' || color.toLowerCase() === 'pink') {
			return true;
		}
	}
	return false;
}
