// Nested Loop

for (let i = 1; i <= 10; i++) {
	console.log('Outers', [ i ]);
	for (let j = 1; j <= 5; j++) {
		console.log('    Inner', [ j ]);
	}
}
