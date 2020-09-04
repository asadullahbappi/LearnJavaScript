// Else if Statement

//Example 1
let ratings = 3;

if (ratings === 3) {
	console.log('You are a Superstar!');
} else if (ratings === 2) {
	console.log('Meet Expectations!');
} else if (ratings === 1) {
	console.log('Need Improvement');
} else {
	console.log('Invalid Ratings');
}

//Example 2

let highscore = 1430;
let userscore = 1200;

if (userscore >= highscore) {
	console.log('Congrats you have the new highscore of ${userscore}');
} else {
	console.log('Good Game. Your score of ${userscore} did not match the high score of ${highscore}');
}
