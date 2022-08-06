// global variables for available choices
let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// wair for the DOM to load content before running game
// get buttons and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function(){

            let playerChoice = this.getAttribute('data-type');

            game(playerChoice);
        })
    }
} );

/** 
 * this is the main function which runs the game
 * @param {string} playerChoice: the choice made by the Player
 */
 function game(playerChoice) {

    //  creates random choice for the computer
    let randomNumber = Math.floor(Math.random() * 5); 
    let computerChoice = choices[randomNumber];

    resetZones();

    displayChoices(playerChoice, computerChoice);

    winnerPerRound(playerChoice, computerChoice);
}

/**
 * this function displays the choice made by the player and computer in the div
 * pairs up the choice buttons with the respective images
 * @param {string} playerChoice: the choice made by the Player
 * @param {string} computerChoice: the random choice made by Computer
 */
function displayChoices(playerChoice, computerChoice) {
    
    let playerZone = document.getElementById('playerZone');
    let computerZone = document.getElementById('computerZone');

    let playerImage = 'assets/images/' + playerChoice + '.png';
    let computerImage = 'assets/images/' + computerChoice + '.png';

    let displayChoice1 = document.createElement('img');
    let displayChoice2 = document.createElement('img');

    displayChoice1.setAttribute('class', 'images');
    displayChoice1.src = playerImage;

    displayChoice2.setAttribute('class', 'images');
    displayChoice2.src = computerImage;

    playerZone.appendChild(displayChoice1);
    computerZone.appendChild(displayChoice2);
}

/**
 * this function deletes the previously selected images
 */
 function resetZones() {

    let replaceImage = document.getElementsByClassName('images');
    let length = replaceImage.length;

    let i = 0;

    while (i < length) {
        replaceImage[0].remove();
        i++;
    }

}

/**
 * this function defines the winner per round
 * @returns {string} : winner message for the user
 */
 function winnerPerRound(playerChoice, computerChoice) {

    let draw = "IT'S A DRAW!";
    let playerWon = "PLAYER SCORES!";
    let computerWon = "COMPUTER SCORES!";

    if (playerChoice == computerChoice) {
        result.innerText = draw;
    } else if (playerChoice == 'rock' && (computerChoice == 'scissors' || computerChoice == 'lizard')) {
        
        result.innerText = playerWon;
    } else if (playerChoice == 'paper' && (computerChoice == 'rock' || computerChoice == 'spock')) {
        
        result.innerText = playerWon;
    } else if (playerChoice == 'scissors' && (computerChoice == 'paper' || computerChoice == 'lizard')) {
        
        result.innerText = playerWon;
    } else if (playerChoice == 'lizard' && (computerChoice == 'paper' || computerChoice == 'spock')) {
        
        result.innerText = playerWon;
    } else if (playerChoice == 'spock' && (computerChoice == 'rock' || computerChoice == 'scissors')) {
        
        result.innerText = playerWon;
    } else {
        
        result.innerText = computerWon;
    }
}