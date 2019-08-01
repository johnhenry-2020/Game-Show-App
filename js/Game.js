/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js
 * Author: Jonathan J. Jolivette*/

class Game {
	constructor() {
		this.missed = 0; //Used to track the number of missed guesses by the player. The initial value is`0`, since no guesses have been made at the start of the game.
		this.phrases = [ 'Negus', 'Pro', 'Interactive' ]; //An array of Phrase objects to use with the game.
		this.activePhrase = 'null'; //The Phrase object that’s currently in play.
	}

	getRandomPhrase() {
		const randomNum = Math.floor(Math.random() * this.phrases.length);
		this.chosenPhrase = this.phrases[randomNum];
		return this.chosenPhrase;
	}

	/* Class methods for starting and ending the game, handling interactions,
  getting a random phrase, checking for a win, and removing a life from the scoreboard...*/

	handleInteraction(letter) {
		console.log(letter);
		console.log(this.chosenPhrase);
	}

	removeLife() {}

	checkForWin() {}

	gameOver() {}

	startGame() {
		const phrase = this.getRandomPhrase();
		const phraseClass = new Phrase(phrase);
		phraseClass.addPhraseToDisplay();
	}
}
