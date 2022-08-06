// global variables for available choices
let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let winners = {
    rock: {
        scissors: 'ROCK crushes SCISSORS',
        lizard: 'ROCK crushes LIZARD'
    },

    paper: {
        rock: 'PAPER covers ROCK',
        spock: 'PAPER disproves SPOCK'
    },

    scissors: {
        paper: 'SCISSORS cuts PAPER',
        lizard: 'SCISSORS decapitates LIZARD'
    },

    lizard: {
        spock: 'LIZARD poisons SPOCK',
        paper: 'LIZARD eats PAPER'
    },

    spock: {
        scissors: 'SPOCK smashes SCISSORS',
        rock: 'SPOCK vaporizes ROCK'
    }
};

//global variables for score limitation and result message for user
let limit = 4;
let result = document.getElementById('result');

// wair for the DOM to load content before running game
// get buttons and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        if (button.getAttribute('id') != 'restart') {

            button.addEventListener('click', function () {

                let playerChoice = this.getAttribute('data-type');

                game(playerChoice);
            })
        } else {
            button.addEventListener('click', restartGame);
        }
    }
});

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

    endGame();
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
 * @param {string} playerChoice: the choice made by the Player
 * @param {string} computerChoice: the random choice made by Computer
 * @returns {string} : winner message for the user
 */
function winnerPerRound(playerChoice, computerChoice) {

    let draw = "IT'S A DRAW!";
    let playerWon = "PLAYER SCORES!";
    let computerWon = "COMPUTER SCORES!";
    let audio = getAudio(playerChoice, computerChoice);

    if (playerChoice == computerChoice) {
        result.innerText = draw;
    } else if (playerChoice == 'rock' && (computerChoice == 'scissors' || computerChoice == 'lizard')) {
        incrementPlayerScore();
        result.innerText = playerWon;
    } else if (playerChoice == 'paper' && (computerChoice == 'rock' || computerChoice == 'spock')) {
        incrementPlayerScore();
        result.innerText = playerWon;
    } else if (playerChoice == 'scissors' && (computerChoice == 'paper' || computerChoice == 'lizard')) {
        incrementPlayerScore();
        result.innerText = playerWon;
    } else if (playerChoice == 'lizard' && (computerChoice == 'paper' || computerChoice == 'spock')) {
        incrementPlayerScore();
        result.innerText = playerWon;
    } else if (playerChoice == 'spock' && (computerChoice == 'rock' || computerChoice == 'scissors')) {
        incrementPlayerScore();
        result.innerText = playerWon;
    } else {
        incrementComputerScore();
        result.innerText = computerWon;        
    }

    if(audio != null) {
        audio.play();
    }
}

/**
 * this function gets the sounds for winnerPerRound
 *@param {string} playerChoice: the choice made by the Player
 * @param {string} computerChoice: the random choice made by Computer
 * @returns the audio object
 */
function getAudio(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return null;
    }

    let winnerMessage = winners[playerChoice][computerChoice];

    if (typeof(winnerMessage) === 'undefined') {
        winnerMessage = winners[computerChoice][playerChoice];
    }

    let audio = new Audio('assets/sounds/' + winnerMessage.split(' ').join('-') + '.mp3');
    return audio;
}

/**
 * this function increments player score when player wins
 */
function incrementPlayerScore() {

    let pScore = parseInt(document.getElementById('pScore').innerText);
    document.getElementById('pScore').innerText = ++pScore;

}

/**
 * this function increments computer score when computer wins
 */
function incrementComputerScore() {

    let cScore = parseInt(document.getElementById('cScore').innerText);
    document.getElementById('cScore').innerText = ++cScore;

}

/**
 * this function resets the scores to 0
 */
function resetScores() {
    document.getElementById('pScore').innerText = 0;
    document.getElementById('cScore').innerText = 0;
}

/**
 * this function defines the winner when score limit is achieved
 */
function endGame() {

    let player = document.getElementById('pScore').innerText;
    let computer = document.getElementById('cScore').innerText;
    let button = document.getElementById('restart');

    if (player == limit || computer == limit) {
        button.hidden = false;

        if (player > computer) {
            result.innerText = 'YOU WON! GAME OVER!'
        } else {
            result.innerText = 'COMPUTER WON! GAME OVER!'
        }

        for (let choice of choices) {
            document.getElementById(choice).disabled = true;
        }
    }
}

/**
 * this function restarts the game when RESTART button is clicked
 */
function restartGame() {
    resetScores();
    resetZones();

    this.hidden = true;

    for (let choice of choices) {
        document.getElementById(choice).disabled = false;
    }
}