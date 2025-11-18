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


let result = ''

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

let score= JSON.parse(localStorage.getItem('score')) 

if (!score){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
};

console.log();
console.log(pickComputerMove());

function calcTax(cost, tax = 0.1){
  console.log(cost * tax)
  
}

calcTax(2000)

function playGame(playermove){
  const computerChoice = pickComputerMove();
  let result = '';
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
          result = 'You won!.'
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
      score.Ties ++;
    } else if (result === 'You lost!'){
      score.Loses ++;
    } else{
      score.Wins ++;
    }

    localStorage.setItem('score', JSON.stringify(score)); // <-- local storage csak stringeket tamogat, ezert jo a JSON a json.stringify atvaltoztatja stringge az objectet a parse pedig vissza
    alert(`${result} your choice was ${playermove} and the computer's choice was ${computerChoice}\nYour score: Loses : ${score.Loses}, Ties: ${score.Ties}, Wins: ${score.Wins}`)
}
   
function resetScore(){
  score.Loses = 0;
  score.Ties = 0;
  score.Wins = 0;
  localStorage.removeItem('score')
  alert(`Your score has been reset Loses: ${score.Loses}, Ties: ${score.Ties}, Wins: ${score.Wins}`)
}
