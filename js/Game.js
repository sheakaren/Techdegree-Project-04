/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Project instructions from the Treehouse website pasted throughout this file to be used as a rubric

// Variables
const $overlay = $('#overlay');

// Create the Game class in the Game.js file.
class Game {
    // The class should include a constructor that initializes the following properties:
    constructor () {
       // missed: used to track the number of missed guesses by the player. 
        // The initial value is 0, since no guesses have been made at the start of the game.
       this.missed = 0;
       // phrases: an array of five Phrase objects to use with the game. 
        // A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
       this.phrases = [
            'Ted Mosby',
            'Robin Scherbatsky',
            'Barney Stinson',
            'Lily Aldrin',
            'Marshall Eriksen'
        ];
       // activePhrase: This is the Phrase object that’s currently in play. 
        // The initial value is null.
        // Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
       this.activePhrase = null;
    }

// The class should also have these methods:

// getRandomPhrase(): this method randomly retrieves one of the phrases stored in the phrases array and returns it.
getRandomPhrase() {
    let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        console.log(randomPhrase); // test to make sure the variable returns a random phrase from the phrases array. 
    return randomPhrase;
}

// startGame()
startGame() {    
    // hides the start screen overlay
    $overlay.hide();
    // calls the getRandomPhrase() method and sets the activePhrase property with the chosen phrase
    let chosenPhrase = this.getRandomPhrase();
    // Sends chosenPhrase to the Phrase class
    this.activePhrase = new Phrase(chosenPhrase);
    // Adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
    this.activePhrase.addPhraseToDisplay(); 
} 

// handleInteraction(): this method controls most of the game logic. 
    // It checks to see if the button clicked by the player matches a letter in the phrase, 
        // and then directs the game based on a correct or incorrect guess.
// handleInteraction() {}
// This method should:
    // Disable the selected letter’s onscreen keyboard button.

    // If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
            // const wrong = $('.wrong')
    // If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, 
            // const chosen = $('.chosen')
        // call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.

// removeLife(): this method removes a life from the scoreboard, 
// removeLife() {
    // adds to the missed count by increments of 1
    // this.missed += 1;
    // // replaces one of the liveHeart.png images with a lostHeart.png image (found in the images folder) and increments the missed property. 
    // const heart = $('.tries'); 
    // for (let i = 0; i < this.missed; i += 1) {
    //     heart[i].src = 'images/lostHeart.png'
    // }
    //     // If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
    // if (this.missed === 5) {
    //     this.gameOver();
    // }
// }

// checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase.
// checkForWin() {}

// gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game, 
// gameOver() {}
    // updates the overlay h1 element with a friendly win or loss message, 
    // and replaces the overlay’s start CSS class with either the win or lose CSS class.


} // end Game class
