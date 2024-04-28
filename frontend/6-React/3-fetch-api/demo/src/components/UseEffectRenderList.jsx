import React, {useState, useEffect} from "react";

function UseEffectRenderList() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    
    let URL = `https://jsonplaceholder.typicode.com/todos/`

    /* 
       useEffect

       - We are loading data from the API into our todos state variable
       - With [] paramater, useEffect will run once AFTER component renders initially
       - After component renders, useEffect will execute
       - fetch() will grab todos data from API and update state variable
       - Component will re-render because state variable has changed
       - The todos state variable is populated now so it will render the list
    */
     fetch(URL)
        .then((response) => response.json())
        .then((data) => setTodos(data)) 
        .catch((error) => {
           console.error('Error fetching data:', error);
        }); 

  }, []);

  return (
      <>
        <h2>Todos</h2>
        <ul>
          {
            todos.map((todo) => {
              return (
                <li key={todo.id}>
                     <input type="checkbox" checked={todo.completed} readOnly />
                     {todo.title}
                </li>
              )
            })
          }
        </ul>
      </>
    );
}

export default UseEffectRenderList;