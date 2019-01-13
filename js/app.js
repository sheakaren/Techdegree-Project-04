/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Project instructions from the Treehouse website pasted throughout this file to be used as a rubric

// Variables
const startGameBtn = $('#btn__reset');
const buttons = document.querySelectorAll('button');
// Create a new instance of the Game class 
let newGame = new Game;



// Add event listeners for the start button and each of the onscreen keyboard buttons 
        // so that clicking a button calls the handleInteraction() method on the Game object.
buttons.addEventListener('click', function() {
    game.handleInteraction();
});

// Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
startGameBtn.addEventListener('click', function(e) {
    newGame.startGame()
});

        // Event delegation can also be used in order to avoid having to add an event listener to each individual keyboard button. 
        // Clicking the space between and around the onscreen keyboard buttons should not result in the handleInteraction() method being called.

        