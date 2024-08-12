let wins = 0;
let ties = 0;
let losses = 0;

const winEl = document.getElementById('wins');
const tieEl = document.getElementById('ties');
const loseEl = document.getElementById('losses');

const rockEl = document.getElementById('rock');
const paperEl = document.getElementById('paper');
const scissorsEl = document.getElementById('scissors');

const computerPlay = function() {
    const computerChoises = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * computerChoises.length)
    return computerChoises[randomChoice];
}

const startGame = function(e) {
    console.log(computerPlay())
}

rockEl.addEventListener('click', startGame());