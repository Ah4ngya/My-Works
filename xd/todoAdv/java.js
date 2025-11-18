
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


const todoArray = [{name:'Make dinner',
                    dueDate: '2022-12-22'}, 
                    {name: 'Make project',
                    dueDate: '2026-02-21'
                    },
                  ];
const todoInputElem = document.querySelector('.js-todo')
const todoBtn = document.querySelector('.js-button')
const todoOutput = document.querySelector('.js-todooutput')
const div = document.querySelector('.js-div')
const dueDateElem = document.querySelector('.js-due-date')

renderTDL()

function renderTDL(){

  let todoArrayHTML = '';

  for (let i = 0; i < todoArray.length; i++){
  const todoObject = todoArray[i];
  const { name, dueDate } = todoObject;
  const todoHtml = `<p>${name}</p> <p>${dueDate}</p> <p><button onclick="todoArray.splice(${i},1);renderTDL()" class="delete-btn">delete</button></p>`;
  todoArrayHTML += todoHtml; 
  }
  div.innerHTML = todoArrayHTML
}



function addTodoItem(){
  
  const item = todoInputElem.value;
  const date = dueDateElem.value;
  todoArray.push({
    name: item,
    dueDate: date
  });
   

}

todoBtn.addEventListener('click',function(){
  addTodoItem()
  renderTDL()
  todoInputElem.value = '';
  console.log(todoArray)
})

