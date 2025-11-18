let guess = ''

let score = JSON.parse(localStorage.getItem(('score')));
if (!score){
  score = {
    Wins: 0,
    Losses: 0
  }
};
  

function playGame(guess){
  let cf = Math.random()
  const result = (cf < 0.5 ? 'heads' : 'tails');
  if (result === guess){
    score.Wins ++;
  }else{
    score.Losses++;
  }
  localStorage.setItem('score', JSON.stringify(score))
  guess === result ? alert(`you win!\nWins: ${score.Wins}, Losses ${score.Losses}`) : alert(`you lost :(\nWins: ${score.Wins}, Losses ${score.Losses}`)
}


