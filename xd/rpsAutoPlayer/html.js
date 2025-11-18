// let time = 11
// const name = 'Aron'

// if (time > 6 && time < 12){
//   console.log(`Gm ${name}`)
// } else if (time > 13 && time < 17){
//   console.log(`Good afternoon ${name}`)
// } else {
//   console.log(`good night ${name}`)
// }

// //time < 12 && time > 6 ? console.log('good morning ') : console.log('gn');

// const isHoliday = true; 

// let age = 4;

// (6 >= age || 65 <= age) && isHoliday ? console.log('discount!') : console.log('no discount :(')

// let cf = Math.random()

// const result = (cf < 0.5 ? 'heads' : 'tails');

// let guess = 'heads'

// guess === result ? console.log('you win!') : console.log('you lost :(')
const rockMove = document.querySelector('.js-rock')
const paperMove = document.querySelector('.js-paper')
const scissorMove = document.querySelector('.js-scissors')
const autoplayer = document.querySelector('.auto-play-btn')
const resetScoreBtn = document.querySelector('.js-reset')

let result = '';
let computerChoice ='';


function pickComputerMove(){ 
  let randomNumber = Math.random()

    if (randomNumber >= 0 && randomNumber < 1/3)
    {
      computerChoice = 'rock';
    }
      else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerChoice = 'paper';
    }
      else if (randomNumber >= 2/3 && randomNumber <= 1){
        computerChoice = 'scissors';
    }
    
  return computerChoice;
}
 
let score = JSON.parse(localStorage.getItem('score'));

if (!score){
  score = {
    Ties: 0,
    Losses: 0,
    Wins: 0
  }
};

let isAutoPlayOn = false;

// console.log();
// console.log(pickComputerMove());

// function calcTax(cost, tax = 0.1){
//   console.log(cost * tax)
  
// }

//calcTax(2000)

function playGame(playermove){
  const computerChoice = pickComputerMove();
  
    if (playermove === 'rock'){
      if (computerChoice === 'rock')
      {
        result = 'Tie.'
      } else if (computerChoice === 'paper'){
        result = 'You lost!'
      } else if (computerChoice === 'scissors') {
        result = 'You won!'
      } 
    }else if (playermove === 'paper'){
      if (computerChoice === 'rock') {
          result = 'You won!'
        }
        else if (computerChoice === 'paper'){
          result = 'Tie.'
        }else  if (computerChoice === 'scissors'){
          result = 'You lost!'
        }
    }else if (playermove === 'scissors'){
          if (computerChoice === 'rock') {
            result = 'You lost!'
          }
          else if (computerChoice === 'paper'){
            result = 'You Won!'
          }else {
            result = 'Tie.'
          }
          
        }
    if (result === 'Tie.'){
      score.Ties++;
    } else if (result === 'You lost!'){
      score.Losses++;
    } else{
      score.Wins++;
    }
    updateScoreELem()
    updateResult()
    updateMoves(playermove)
    localStorage.setItem('score', JSON.stringify(score)); // <-- local storage csak stringeket tamogat, ezert jo a JSON a json.stringify atvaltoztatja stringge az objectet a parse pedig vissza

    
};

function hide(){
  document.querySelector('.js-reset-conf').innerHTML = '';
}


function showConfirmation(){
  document.querySelector('.js-reset-conf').innerHTML =
  `Are you sure you'd like to reset your score? <button class="yesbtn">Yes</button> <button class="nobtn">No</button>`;
  
  document.querySelector('.yesbtn').addEventListener('click',()=>{
    resetScore();
    hide();
  })
  document.querySelector('.nobtn').addEventListener('click',()=>{
    hide();
  })
};

function resetScore(){
  score.Ties = 0;
  score.Losses = 0;
  score.Wins = 0;
  localStorage.removeItem('score')
  updateScoreELem()
}

document.querySelector('.js-score').innerHTML = `Losses: ${score.Losses}, Ties: ${score.Ties}, Wins: ${score.Wins}`

function updateScoreELem(){
  document.querySelector('.js-score').innerHTML = `Losses: ${score.Losses}, Ties: ${score.Ties}, Wins: ${score.Wins}`
};
function updateResult(){
  document.querySelector('.js-resultofgame').innerHTML = `${result}`
};
function updateMoves(playermove){
  document.querySelector('.js-moves').innerHTML = `Computer: <img src="${computerChoice}-emoji.png" class="move-icon"> --  You: <img src="${playermove}-emoji.png" class="move-icon">`
};


let intervalId = '';


function autoPlay(){
  if (!isAutoPlayOn){
    intervalId = setInterval(function(){
        const playermove = pickComputerMove();
        playGame(playermove)
      },1000)
      isAutoPlayOn = true;
  } else {
    clearInterval(intervalId);
    isAutoPlayOn = false;
  }
  
};


paperMove.addEventListener('click', ()=>{
  playGame('paper');
  pickComputerMove();
});
rockMove.addEventListener('click', ()=>{
  playGame('rock');
  pickComputerMove();
});
scissorMove.addEventListener('click', ()=>{
  playGame('scissors');
  pickComputerMove();
});

resetScoreBtn.addEventListener('click', ()=>{
  showConfirmation()
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r'){
    playGame('rock')
  } else if (event.key === 'p'){
    playGame('paper')
  } else if (event.key === 's'){
    playGame('scissors')
  } else if (event.key === 'a'){
    autoPlay()
      if (autoplayer.innerHTML === 'Auto play'){
        autoplayer.innerHTML = 'Stop Playing'
      } else if (autoplayer.innerHTML === 'Stop Playing'){
        autoplayer.innerHTML = 'Auto play'
      }
  } else if (event.key === 'Backspace'){
    showConfirmation()
  }

});

autoplayer.addEventListener('click',function(){
  autoPlay()
  if (autoplayer.innerHTML === 'Auto play'){
    autoplayer.innerHTML = 'Stop Playing'
  } else if (autoplayer.innerHTML === 'Stop Playing'){
    autoplayer.innerHTML = 'Auto play'
  }
});