const subElem = document.querySelector('.js-button')

subElem.addEventListener('click',function change(){
  if (subElem.innerText === 'Subscribe')
  {
    subElem.innerText = 'Subscribed';
    subElem.classList.add('subscribed');
  } else {
    subElem.innerText = 'Subscribe'
    subElem.classList.remove('subscribed')
  }
});

const result = document.querySelector('.js-result');
const inputElem = document.querySelector('.js-cost');

function calculateTotal(){
  let cost = Number(inputElem.value);
  if (cost <= 40){
    cost += 10; //típus koerzió, ha a DOM-ból kapunk értéket az MINDIG string, ezért kell NUMBER-el parseolni
  }
  document.querySelector('.js-result').innerHTML = `$${cost} `

};

const calc = document.querySelector('.js-calculator');

calc.addEventListener('click',function(){
  calculateTotal()
  
})

function handleCostKeyDown(){
  if (event.key === 'Enter'){
    calculateTotal()
  }
}

//string(25)
//'25'-5 -> SZÁMOT fog visszaadni nem stringet, mert ha a string csak számokat tartalmaz akkor nem konkatenál hanem automatán konvertál és matekoz

window.document //ugyanaz mint siman a document, a window az egész browser
window.console.log(window);
//window.alert()
//window is beépített objektum 

console.log(document.querySelector('.js-changeit1'));
const gyak = document.querySelector('.js-changeit2');

gyak.addEventListener('click',function(){
  gyak.innerHTML = 'Well done!'
});

const heads = document.querySelector('.heads');
const tails = document.querySelector('.tails');
const output = document.querySelector('.js-output')


heads.addEventListener('click',function(){
  output.innerHTML='You chose Heads!'
});
tails.addEventListener('click',function(){
  output.innerHTML='You chose Tails!'
});

const submit = document.querySelector('.js-submit');
const inputfield = document.querySelector('.js-nameinput');

function pushName(){
  let name = inputfield.value
  console.log(name)
  output.innerHTML = `Your name is ${name}`
};

submit.addEventListener('click',function(){
  pushName()
});

function handleNameKeyDown(){
  if (event.key === 'Enter'){
   pushName()
  }
}

