/* OOP Game App
 * App.js
 * Author: Jonathan J. Jolivette*/

/*Creates a new instance of the`Game` class and adds event listeners for the start
button and onscreen keyboard buttons.*/

const game = new Game();

function resetDisplay() {
	game.startGame();
}

function markButton(event) {
	if (event.target.tagName === 'BUTTON') {
		const letter = event.target.textContent;

		const targetLetter = event.target;
		targetLetter.setAttribute('disabled', 'true');
		//Reference:   https://www.w3schools.com/howto/howto_js_add_class.asp
		targetLetter.classList.add('chosen');

		game.handleInteraction(event, letter);
	}
}

document.getElementById('btn__reset').addEventListener('click', resetDisplay);

document.getElementById('qwerty').addEventListener('click', markButton);
