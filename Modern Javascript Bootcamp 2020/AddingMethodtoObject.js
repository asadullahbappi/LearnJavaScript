// adding method to object

const math = {
	numbers: [ 1, 2, 3, 4, 5 ],
	add: function(x, y) {
		return x + y;
	},
	multiply: function(x, y) {
		return x * y;
	}
};

// Shorter way to add method to the object.

const auth = {
	username: 'TommyBot',
	login() {
		console.log('LOGGED YOU IN');
	},
	logout() {
		console.log('Good Bye');
	}
};
