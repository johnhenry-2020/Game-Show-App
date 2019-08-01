/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
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
		console.log(phrase);
		const list = document.getElementById('phrase').firstElementChild;
		console.log(list);

		for (let i = 0; i < phrase.length; i++) {
			const letterItem = `<li class="hide letter ${phrase[i]}"> ${phrase[i]} </li>`;
			//Reference:   https://stackoverflow.com/questions/6304453/javascript-append-html-to-container-element-without-innerhtml
			list.insertAdjacentHTML('beforeEnd', letterItem);
		}
	}
	checkLetter() {}

	showMatchedLetter() {}
}
