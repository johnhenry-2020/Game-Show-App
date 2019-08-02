/* OOP Game App
 * Phrase.js
 * Author: Jonathan J. Jolivette*/

// Phrase class to handles the creation of phrases...
class Phrase {
	//Phrase class constructor method receives one parameter: `phrase`...
	constructor(phrase) {
		this.phrase = phrase; //This is the actual phrase the Phrase object is representing.
	}

	addPhraseToDisplay() {
		const phrase = this.phrase;

		const list = document.getElementById('phrase').firstElementChild;

		for (let i = 0; i < phrase.length; i++) {
			let letterItem = '';
			if (phrase[i] === ' ') {
				letterItem = `<li class="hide show letter ${phrase[i]}"> ${phrase[i]} </li>`;
			} else {
				letterItem = `<li class="letter ${phrase[i]}"> ${phrase[i]} </li>`;
			}
			//Reference:   https://stackoverflow.com/questions/6304453/javascript-append-html-to-container-element-without-innerhtml
			list.insertAdjacentHTML('beforeEnd', letterItem);
		}
	}
	checkLetter(letter) {
		return !!this.phrase.match(letter);
	}

	showMatchedLetter(letter) {
		const letterElements = document.getElementsByClassName(letter);
		for (let i = 0; i < letterElements.length; i++) {
			letterElements[i].classList.add('show');
		}
	}
}
