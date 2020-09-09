// reduce
const num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const result = num.reduce((total, curval) => {
	return total + curval;
});

// const max = num.reduce((max, curval) => {
// 	if (max > curval) return max;
// 	return curval;
// });

//or

const max = num.reduce((max, curval) => {
	return Math.max(max, curval);
});
//or
const min = num.reduce((min, curval) => {
	return Math.min(min, curval);
});

const votes = [ 'y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y' ];

const results = votes.reduce((tally, val) => {
	if (tally[val]) {
		tally[val]++;
	} else {
		tally[val] = 1;
	}
	return tally;
}, {});
