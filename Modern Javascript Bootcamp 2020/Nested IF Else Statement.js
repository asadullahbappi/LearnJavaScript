// Nested if else statement

let password = 'Asadullah';

if (password.length >= 6) {
	if (password.indexOf(' ') === -1) {
		console.log('Your Passeord is Valid');
	} else {
		console.log('Password is long enough but cannot contain spaces');
	}
} else {
	console.log('Passeord Must be longer!');
}
