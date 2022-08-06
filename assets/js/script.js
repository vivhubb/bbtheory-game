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
