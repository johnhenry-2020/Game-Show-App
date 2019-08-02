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
	} else if (event instanceof KeyboardEvent) {
		const input = event.key.toLowerCase();
		// regex that checks for lower case letter in the alphabet
		const letterReg = /[a-z]/g;
		// check if the letter is actually a letter
		const inputIsLetter = input.match(letterReg);
		// if the input is a letter
		if (inputIsLetter) {
			// get all on screen button elements
			const buttonElements = document.querySelectorAll('.key');
			let targetLetter;
			// loop over the button elements
			for (let i = 0; i < buttonElements.length; i++) {
				// if the button elements text is the same as the input
				// store that element in targetLetter
				if (buttonElements[i].textContent === input) {
					targetLetter = buttonElements[i];
				}
			}
			// set the element to disabled so the user cannot click it anymore
			targetLetter.setAttribute('disabled', 'true');
			// add the class chosen to the element
			targetLetter.classList.add('chosen');
			// call the handleInteraction method and pass the event object and the letter
			game.handleInteraction(event, input);
		}
	}
}

document.getElementById('btn__reset').addEventListener('click', resetDisplay);

document.getElementById('qwerty').addEventListener('click', markButton);

document.addEventListener('keypress', markButton);
