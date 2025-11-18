
// const sajt = {
//   type: 'tejtermek',
// }
// const array = [10,20,30,40,50,sajt,'tejtermek']

// for (let i = 0;i < 10;i++){
//   if (array[i] < 100 || array[i] === 'tejtermek'){
    
//     console.log(array[i])
//   }
// };

// let i = 0;

// while (i <= 10){
  
//   console.log(i);
//   i++;

// }
// let randomNumber = 0;

// while (randomNumber < 0.5){
//   randomNumber = Math.random();
// }

//console.log(randomNumber)

//az array az egy objektum
// console.log(typeof array)

// console.log(array.length)

// console.log(sajt.type);
// array.push(11)//beletol egy uj szamot/adatot

// console.log(array);

// array.splice(0, 1);

// console.log(array);

// const todoList = [
//   'this',
//   'that',
//   'maybe that'
// ]

// for (let i = 0; i<todoList.length;i++){
//   console.log(todoList[i])
// }

// const array = [1,2,3,66,11,1,12,3,1]
// let total = 0;
// for (let i = 0; i < array.length;i++){
//   total = total + array[i];
//   console.log(total)
// }

// const array2 = []

// for (let i = 0; i < array.length;i++){
//   const num = array[i]*2;
//   array2.push(num)
// }
// console.log(array2)


const todoArray = ['Make dinner','Make project'];
const todoInputElem = document.querySelector('.js-todo')
const todoBtn = document.querySelector('.js-button')
const todoOutput = document.querySelector('.js-todooutput')
const div = document.querySelector('.js-div')

renderTDL()

function renderTDL(){

  let todoArrayHTML = '';

  for (let i = 0; i < todoArray.length; i++){
  const todoitem = todoArray[i];
  const todoHtml = `<p>${todoitem}</p>`
  todoArrayHTML += todoHtml; 
  }
  div.innerHTML = todoArrayHTML
}



function addTodoItem(){
  
  const item = todoInputElem.value;

  todoArray.push(item);
   

}

todoBtn.addEventListener('click',function(){
  addTodoItem()
  renderTDL()
  todoInputElem.value = '';
  console.log(todoArray)
})
