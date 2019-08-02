/* OOP Game App
 * Game.js
 * Author: Jonathan J. Jolivette*/

class Game {
	constructor() {
		this.missed = 0; //Used to track the number of missed guesses by the player. The initial value is`0`, since no guesses have been made at the start of the game.
		this.phrases = [
			'negus',
			'user interaction',
			'front end',
			'linkedin',
			'jonathan jolivette',
			'software engineer',
			'apprentice'
		]; //An array of Phrase objects to use with the game.
		this.activePhrase = 'null'; //The Phrase object that’s currently in play.
		this.phraseClass = '';
	}

	getRandomPhrase() {
		const randomNum = Math.floor(Math.random() * this.phrases.length);
		this.chosenPhrase = this.phrases[randomNum];
		return this.chosenPhrase;
	}

	/* Class methods for starting and ending the game, handling interactions,
  getting a random phrase, checking for a win, and removing a life from the scoreboard...*/

	handleInteraction(event, letter) {
		const letterIsInPhrase = this.phraseClass.checkLetter(letter);

		if (letterIsInPhrase) {
			this.phraseClass.showMatchedLetter(letter);
			this.checkForWin();
		} else {
			if (event instanceof KeyboardEvent) {
				const wrongInputs = document.querySelectorAll('.wrong');

				if (wrongInputs) {
					for (let i = 0; i < wrongInputs.length; i++) {
						if (wrongInputs[i].textContent === letter) {
							return false;
						}
					}
				}

				const buttonElements = document.querySelectorAll('.key');
				let targetLetter;

				for (let i = 0; i < buttonElements.length; i++) {
					if (buttonElements[i].textContent === letter) {
						targetLetter = buttonElements[i];
					}
				}

				targetLetter.classList.add('wrong');
			} else {
				event.target.classList.add('wrong');
			}

			this.removeLife();
		}
	}

	removeLife() {
		this.missed += 1;
		document.getElementsByClassName('tries')[0].remove();

		if (this.missed === 5) {
			this.gameOver('Sorry, better luck next time!');
		}
	}

	checkForWin() {
		const showCount = document.querySelectorAll('.show').length;
		const letterCount = this.phraseClass.phrase.length;
		// const confetti = document.getElementById('#confetti');

		if (letterCount === showCount) {
			this.gameOver(`Congratulations! You Guessed it... "${this.chosenPhrase}" is correct!`);
			const canvas = document.getElementById('confetti');
			canvas.setAttribute('id', 'showMe');

			$(canvas).delay(2500).fadeOut();
			$('#game-over-message').delay(2500).addClass('flash');
		}
	}
	btn__reset;
	gameOver(message) {
		document.getElementById('overlay').style.display = 'block';
		document.getElementById('game-over-message').innerHTML = message;
		document.getElementById('btn__reset').textContent = 'Reset Game';
	}

	startGame() {
		if (document.getElementById('btn__reset').textContent === 'Reset Game') {
			window.location.reload(true);
			return false;
		}
		const phrase = this.getRandomPhrase();
		this.phraseClass = new Phrase(phrase);
		this.phraseClass.addPhraseToDisplay();
		document.getElementById('overlay').style.display = 'none';
	}
}
