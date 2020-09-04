// for in Loop

const jeopardyWinnings = {
	regularPlay: 2522700,
	watsonChallenge: 300000,
	tournamentOfChampion: 500000,
	battleOfTheDecade: 100000
};

for (const props in jeopardyWinnings) {
	console.log(props, jeopardyWinnings[props]);
}
total = 0;
for (const props in jeopardyWinnings) {
	total += jeopardyWinnings[props];
}
console.log(total);
