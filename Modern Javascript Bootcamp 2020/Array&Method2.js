// Array Method

// ARRAY concat

let fruits = [ 'apple', 'banana' ];
let vegetables = [ 'asparagus', 'brussel sprout' ];
let bakeryItem = [ 'cake', 'roll' ];
console.log(fruits.concat(vegetables));
console.log(vegetables.concat(fruits, bakeryItem));

//Array Incluses

let ingedients = [ 'water', 'corn starch', 'flour', 'cheese', 'brown sugar', 'shrimp', 'eel', 'butter' ];

console.log(ingedients.includes('shrimp')); //Prints True

//Array IndexOF

console.log(ingedients.indexOf('water')); // Prints 0

//Array Reverse

let letters = [ 'T', 'C', 'E', 'P', 'S', 'E', 'R' ];

console.log(letters.reverse());

//Array Reverse

console.log(letters.reverse().reverse().join('-'));

// Array Slice

let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortise' ];

let swimmwer = animals.slice(0, 3);
console.log(swimmwer);

let mamels = animals.slice(2, 4);
console.log(mamels);

let reptiles = animals.slice(4, 6);
console.log(reptiles);

let quadruped = animals.slice(3, 6);
console.log(quadruped);

// Array Splice

console.log(animals.splice(1, 0, 'octupus'));
console.log(animals);
