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
        result = 'You lost :('
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
            result = 'You lost!.'
          }
          else if (computerChoice === 'paper'){
            result = 'You Won!'
          }else {
            result = 'Tie.'
          }
        }
        alert(`${result} your choice was ${playermove} and the computer's choice was ${computerChoice}`)
    }
   

const name = 'Aron'

function greet(name = 'there!'){
  typeof name === undefined ? console.log('Hi there!'):console.log(`Hello ${name}`)
}
  
greet(name);

  
function convertFtoC(celsius = 0){
  let result = (celsius * 9/5)+ 32
  console.log(result)
  return result;
}
  
convertFtoC(0)

function convertCtoF(fahrenheit = 32){
  let result2 = (fahrenheit - 32) * 5/9;
  console.log(Math.round(result2));
  return result2;
}

convertCtoF(32)

function convertTemp(degrees,unit){
  unit === 'C' ? console.log(`${(degrees * 9/5) + 32}F`) : unit === 'F' ? console.log(`${(Math.round((degrees-32) * 5/9))}C`) : console.log('error')
}
convertTemp(25,'C')

function convertLength(length, from, to){
  from === 'miles' && to === 'km' ? console.log(`${length * 1.6} km`) : from === 'km' && to === 'miles' ? console.log(`${length / 1.6} miles`) : from === to ? 
  console.log(`${length * 1} ${to}`) : 
  from === 'miles' && to === 'feet' ? console.log(`${length * 5280} ft`) : from === 'km' && to === 'feet' ? console.log(`${length * 3281}`) : from === 'feet' && to === 'miles' ? console.log(`${length / 5280} miles`) : from === 'feet' && to === 'km' ? console.log(`${length / 3281}km`) : from !== 'km' || from !== 'miles' || from !== 'feet' ? console.log(`invalid inputs ${from}`) :
  to !== 'km' || to !== 'miles' || to !== 'feet' ? console.log(`invalid inputs ${to}`) : console.log('unknown error')
}

convertLength(5280,'km','lbs')