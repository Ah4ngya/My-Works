const inputELement = document.querySelector('.js-inputfield');
const outputElement = document.querySelector('.js-output');
const btnElement = document.querySelector('.js-button');
const inputELem = document.querySelector('.js-textfield');
const updateElement = document.querySelector('.js-updateit');


function calculateTotal(){

  let cost = Number(inputELement.value)*100;
  
  
  
  if (cost / 100 < 40){
    cost = cost + 1000
  }
  document.querySelector('.js-output').innerHTML = `$${cost / 100} `

};



btnElement.addEventListener('click',function(){
  calculateTotal()
});

function handleCostKeyDown(){
  if (event.key === 'Enter'){
    calculateTotal()
  }
};

function getText(){
  updateElement.innerHTML = inputELem.value
}

