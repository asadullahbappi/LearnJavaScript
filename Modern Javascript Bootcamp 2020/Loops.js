//LOOPS

// For LOOPS
//Example 1

for (let i = 0; i < 10; i++) {
	console.log('Hello!', i);
}

// Example 2

for (let i = 1; i <= 20; i++) {
	console.log(`${i}X${i}=${i * i}`);
}

//Example 3

for (let i = 200; i >= 0; i -= 25) {
	console.log(i);
}

console.log('After the Loop');

//Example 4

const examScores = [ 98, 77, 84, 91, 57, 66 ];

for (let i = 0; i < examScores.length; i++) {
	console.log(`${i + 1}: ${examScores[i]}`);
}

// Example 4

const myStudents = [
	{
		firstName: 'Zeus',
		grade: 86
	},
	{
		firstName: 'Artemis',
		grade: 97
	},
	{
		firstName: 'Hera',
		grade: 72
	},
	{
		firstName: 'Apollo',
		grade: 90
	}
];

for (let i = 0; i < myStudents.length; i++) {
	console.log(`${myStudents[i].firstName} scored ${myStudents[i].grade}`);
}

//example 5

const word = 'stressed';

for (let i = word.length - 1; i >= 0; i--) {
	console.log(word[i]);
}

// Example 6

let totalScores = 0;
for (let i = 0; i < myStudents.length; i++) {
	totalScores += myStudents[i].grade;
}
console.log(totalScores / myStudents.length);
