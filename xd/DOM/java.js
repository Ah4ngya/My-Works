
// document.body.innerHTML = 'hi';
// document.title = 'good job boy'; //document object reprezentalja, modellezi az oldalt

console.log(document.title)

document.title = 'changed';

console.log(document.body);

console.log(typeof document.body);

//document.body.innerHTML = '<button>good job!</button>';

console.log(document.body.innerHTML);

//document.body.innerHTML = '0' innerhtml kontrollt ad a body és más html elementek fölött

console.log(document.querySelector('button')) //a html elementeket a queryselector belerakja a JAVASCRIPTEDBE tehát kontrollt ad felette

document.querySelector('button');

document.querySelector('button').innerHTML = 'changed';

console.log(document.querySelector('.js-boi').innerHTML = 'csok') //ha a queryselectorban .-t irsz az elejére akkor classt fog keresni nem egy elementet tehát class selector lesz, classokat js-el kezdeni good practice

const buttonElement = document.querySelector('.js-boi') //változóként tárolja a html elementet

console.log(buttonElement)
































