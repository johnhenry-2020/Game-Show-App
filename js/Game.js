/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js
 * Author: Jonathan J. Jolivette*/

class Game {
	constructor() {
		this.missed = 0;
		this.phrases = [];
	}

	getRandomPhrase() {
		const randomNum = Math.floor(Math.random() * this.phrases.length);
		return this.phrases[randomNum];
	}

	handleInteraction() {}

	removeLife() {}

	checkForWin() {}

	gameOver() {}

	startGame() {
		const phrase = this.getRandomPhrase();
		const phraseClass = new Phrase(phrase);
	}
}
