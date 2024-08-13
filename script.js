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

const removeAllClasses = function() {
  [rockEl, paperEl, scissorsEl].forEach(el => {
      el.classList.remove('win-case', 'lose-case', 'tie-case');
  });
};

const compRandom = function(){
const index = Math.floor(Math.random() * choices.length);
return choices[index];
};


choicesDiv.addEventListener('click', function(e) {
  removeAllClasses();
    let userChoice;
    if (e.target.matches('.choice')) {
       let computerChoice = compRandom();
       userChoice = e.target.getAttribute('id');
       const userOptionEl = document.getElementById(userChoice);
       const compOptionEl = document.getElementById(computerChoice);
       console.log(userChoice, computerChoice)

       if (userChoice === computerChoice) {
           ties++;
           tieEl.textContent = 'Ties: ' + ties;
           userOptionEl.classList.add('tie-case');
         } else if (
           (userChoice === 'rock' && computerChoice === 'scissors') || 
           (userChoice === 'paper' && computerChoice === 'rock') || 
           (userChoice === 'scissors' && computerChoice === 'paper')
         ) {
           wins++;
           winEl.textContent = 'Wins: ' + wins;
           userOptionEl.classList.add('win-case');
           compOptionEl.classList.add('lose-case');
         } else {
           losses++;
           loseEl.textContent = 'Losses: ' + losses;
           userOptionEl.classList.add('lose-case');
           compOptionEl.classList.add('win-case');
         }
         computerChoice = '';
    };

});