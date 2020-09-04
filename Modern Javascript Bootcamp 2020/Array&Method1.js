// ARRAY and how to change it

let name = [ 'Asad', 'Mohib', 'Abdullah', 'Sanaullah', 'Baqaullah' ];
name[0] = 'Abid';
name[1] = 'Muzammil';
name[2] = 'Sajid';
name[3] = 'Zahid';
name[4] = 'Majid';
name[name.length] = 'Nani Amma';
name[name.length] = 'Nana Abu';
console.log(name);

let topSongs = [ 'First Time Ever I Saw Your Face', 'God Only Know', 'A day in the Life', 'Life on Mars' ];

// Push Adding to end
topSongs.push('Fortunate Song');
console.log(topSongs);
topSongs.push(true); // will add true to the end
console.log(topSongs);
// POP Remove to end
topSongs.pop(); // will remove true from the end
console.log(topSongs);
// Shift Remove from start
// Unshift Add to start
