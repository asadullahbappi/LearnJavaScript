// Logical && Statement operators

//Example 1:
let password = 'Asadullah';

if (password.length >= 6 && password.indexOf(' ') === -1) {
	console.log('Password is Valid');
} else {
	console.log('Password is Invalid');
}

//Example 2:

let num = -1;

if (num >= 1 && num <= 10) {
	console.log('Number is between 1 and 10');
} else {
	console.log('Number is not between 1 and 10');
}
