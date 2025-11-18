let calculation = JSON.parse(localStorage.getItem('calculation'));
const outputfield = document.querySelector('.js-output')
if (!calculation){
  calculation = ''
}
outputfield.innerHTML = calculation
outputfield.innerHTML
function updateCalculation(number){
  if (number == 1){
    calculation += 1, outputfield.innerHTML = calculation
  } else if (number == 2){
    calculation += 2, outputfield.innerHTML = calculation
  } else if (number == 3){
    calculation += 3, outputfield.innerHTML = calculation
  } else if (number == 4){
    calculation += 4, outputfield.innerHTML = calculation
  } else if (number == 5){
    calculation += 5, outputfield.innerHTML = calculation
  } else if (number == 6){
    calculation += 6, outputfield.innerHTML = calculation
  } else if (number == 7){
    calculation += 7, outputfield.innerHTML = calculation
  } else if (number == 8){
    calculation += 8, outputfield.innerHTML = calculation
  } else if (number == 9){
    calculation += 9, outputfield.innerHTML = calculation
  } else if (number == ' + '){
    calculation += ' + ', outputfield.innerHTML = calculation
  }  else if (number == ' - '){
    calculation += ' - ', outputfield.innerHTML = calculation
  } else if (number == ' * '){
    calculation += ' * ', outputfield.innerHTML = calculation
  } else if (number == 0){
    calculation += 0, outputfield.innerHTML = calculation
  } else if (number == ' , '){
    calculation += ' , ', outputfield.innerHTML = calculation
  } else if (number == ' / '){
    calculation += ' / ', outputfield.innerHTML = calculation
  } 

  localStorage.setItem('calculation',JSON.stringify(calculation))
}

function clearCalc(){
  calculation = ''
  outputfield.innerHTML = calculation
  localStorage.removeItem('calculation')
  
}