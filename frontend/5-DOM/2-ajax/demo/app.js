
const todoBtn = document.querySelector("#todo-button");
todoBtn.addEventListener("click", getTodo);

const imageBtn = document.querySelector("#image-button");
imageBtn.addEventListener("click", getImage);

const todosBtn = document.querySelector("#todo-list-button");
todosBtn.addEventListener("click", getTodos);

const postTodoBtn = document.querySelector("#post-todo-button");
postTodoBtn.addEventListener("click", postTodo);

const deleteTodoBtn = document.querySelector("#delete-todo-button");
deleteTodoBtn.addEventListener("click", deleteTodo);


function getTodo() {

    const todoOutput = document.querySelector(".todo-output");

    const intake = parseInt(document.querySelector("#quantity").value);
    const url = `https://jsonplaceholder.typicode.com/todos/${intake}`;

   fetch(url)
     .then(function(response) {
       return response.json();
     })
    .then(function(data){
      console.log(data);
       todoOutput.innerHTML = data.title;
    })
}

function getImage() {

    const imageWrapper = document.querySelector("#image-wrapper");
    const image = document.createElement("img");
    image.width = 300;
    image.height = 300;

   fetch('https://source.unsplash.com/random')
     .then(function(response) {
        console.log(response.url);
        if (imageWrapper.firstChild) imageWrapper.removeChild(imageWrapper.firstChild);
        image.src = response.url;
        imageWrapper.appendChild(image);
    })
}

function getTodos() {
  
  const todoList = document.querySelector(".todo-list");

  const liElementsToRemove = todoList.querySelectorAll('li');
  if (liElementsToRemove.length > 0) liElementsToRemove.forEach(li => li.remove());

  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
     
      // No way to limit the number of todos returned by the API
      data = data.slice(0, 10);
      data.forEach(todo => {
        let li = document.createElement('li');
        li.textContent = todo.title;
        todoList.appendChild(li);
      })
    })
  .then(function(response) {
    return response.json();
  })
}

function postTodo() {

  const todoTitle = document.querySelector("#todo-title").value;
  const todoBody = document.querySelector("#todo-body").value;

  const randomUserId = Math.floor(Math.random() * 10000) + 1;
  
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
      title: todoTitle,
      body: todoBody,
      userId: randomUserId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
}

function deleteTodo() {
      
  const todoId = parseInt(document.querySelector("#todo-id").value);
  
  fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
    method: 'DELETE'
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
}