/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js
 * Author: Jonathan J. Jolivette*/

class Phrase {
	constructor(phrase = 'hello') {
		this.phrase = phrase;
	}

	addPhraseToDisplay() {
		const phrase = this.phrase;
		const phraseWrapper = document.createElement('div');
		phraseWrapper.setAttribute('id', 'phrase');
		phraseWrapper.setAttribute('class', 'section');

		const letterList = document.createElement('ul');

		for (let i = 0; i < phrase.length; i++) {
			const letterItem = `<li class="hide letter ${phrase[i]}"> ${phrase[i]} </li>`;
			letterList.append(letterItem);
		}

		phraseWrapper.append(letterList);
	}

	checkLetter() {}

	showMatchedLetter() {}
}
