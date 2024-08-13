let wins = 0;
let ties = 0;
let losses = 0;

const winEl = document.getElementById('wins');
const tieEl = document.getElementById('ties');
const loseEl = document.getElementById('losses');

const choicesDiv = document.getElementById('el-choices');
const rockEl = document.getElementById('rock');
const paperEl = document.getElementById('paper');
const scissorsEl = document.getElementById('scissors');

const choices = ['rock', 'paper', 'scissors'];

const compRandom = function(){
const index = Math.floor(Math.random() * choices.length);
const result = choices[index];
return result
}


choicesDiv.addEventListener('click', function(e) {
    let userChoice;
    if (e.target.matches('.choice')) {
       let computerChoise = compRandom();
       userChoice = e.target.getAttribute('id');
       console.log(userChoice, computerChoise)

       if (userChoice === computerChoise) {
           ties++;
           tieEl.textContent = 'Ties: ' + ties;
           window.alert("It's a tie!");
         } else if (
           (userChoice === 'rock' && computerChoise === 'scissors') || 
           (userChoice === 'paper' && computerChoise === 'rock') || 
           (userChoice === 'scissors' && computerChoise === 'paper')
         ) {
           wins++;
           winEl.textContent = 'Wins: ' + wins;
           window.alert("You win!");
         } else {
           losses++;
           loseEl.textContent = 'Losses: ' + losses;
           window.alert("You lost!");
         }
         computerChoise = '';
    };

});