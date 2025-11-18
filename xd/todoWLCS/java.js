

let todoArray = JSON.parse(localStorage.getItem('todolist')) || [{name: 'make dinner', dueDate:'2022-12-22'}];                  
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
  const todoHtml = `<p>${name}</p> <p>${dueDate}</p> <p><button onclick="todoArray.splice(${i},1);renderTDL();save(); " class="delete-btn" >delete</button></p>`;
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
  
   
  save();
}

todoBtn.addEventListener('click',function(){
  addTodoItem()
  renderTDL()
  todoInputElem.value = '';
  console.log(todoArray)
})

function save(){
  localStorage.setItem('todolist',JSON.stringify(todoArray))
    
}

