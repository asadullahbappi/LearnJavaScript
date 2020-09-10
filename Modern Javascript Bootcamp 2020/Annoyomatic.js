//Annoyomatic .js

const annoyer = {
	phrases: [ 'literally', 'cray cray', "I can't even", 'Totes!', 'YOLO', "Can't Stop,Won't Stop" ],
	pickPhrase() {
		const { phrases } = this;
		const idx = Math.floor(Math.random() * this.phrases.length);
		return phrases[idx];
	},
	start() {}
};
