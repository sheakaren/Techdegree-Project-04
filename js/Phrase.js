/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Project instructions from the Treehouse website pasted throughout this file to be used as a rubric

// Variables
let matched = false;

// The class should include a constructor that receives a phrase parameter and initializes the following properties:
 class Phrase {
     // phrase: this is the actual phrase the Phrase object is representing. 
     // This property should be set to the phrase parameter, but converted to all lower case.
     constructor (phrase) {
        this.phrase = phrase;
     }

// The class should also have these methods:

// addPhraseToDisplay(): this adds letter placeholders to the display when the game starts. 
    addPhraseToDisplay() {
    // Each letter is presented by an empty box, one li element for each letter. 
    let phraseDiv = document.getElementById('phrase').getElementsByTagName('ul')[0];
    for (let i = 0; i < this.phrase.length; i += 1) {
        let newListElement = document.createElement('li');
        // The phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces.
        let character = this.phrase[i];
			if (character === ' ') {
				newListElement.className = 'space';
			} else {
				newListElement.className = 'letter';
			}
			newListElement.textContent = character;
			phraseDiv.appendChild(newListElement);
        }
        // Prevents player from using the mouse to highlight the letters in the phrase (no cheating!)
        document.addEventListener('mousedown', function (e) {
            e.preventDefault();
          }); // Credit for this snippet goes to Emma from Treehouse via Slack
        // When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). 
    } // end addPhraseToDisplay()
     
// checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.
    checkLetter(letter) {
        let letterCheck = this.phrase;
        if(letterCheck.includes(letter)) {
            matched = true;
        } else {
           matched = false;
        };
      } // end checkLetter()
    


// showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. 
    showMatchedLetter(letter) {
    // To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter 
        // and replace each selected element's hide CSS class with the show CSS class.
        if (matched = true) {
            letter.className = 'show';
        };
    } // end showMatchedLetter()

    


 } // end Phrase class
