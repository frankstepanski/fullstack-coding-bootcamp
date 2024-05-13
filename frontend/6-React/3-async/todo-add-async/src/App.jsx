import React, {useState, useEffect} from 'react';
import { fetchAPI } from './utils';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import './App.css';

const URL = "https://api-server-xki8.onrender.com/todos"

function App() {
  const [todos, setTodos] = useState([]);

   // => fetching inital todos
   useEffect(() => {

      let options = {
        method: 'GET',
        headers: {
           'Content-Type': 'application/json'
        }
      };
   
      async function fetchData() {

        try {

          const todosData = await fetchAPI(URL, options);
          todosData.sort((a, b) => (a.id < b.id) ? 1 : -1)
          setTodos(todosData);

        } catch (error) {
 
            console.error('Error fetching data:', error.message);
            setError('Error fetching data. Please try again later.');
        }
      }

      fetchData();

    }, [])

  const addTodo = async (val) => {

     const newTodo = {
        text: val,
        isCompleted: false
     }

     let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      };

      try {
      
         const newTodo = await fetchAPI(URL, options);
         const newTodos = [...todos, newTodo].sort((a, b) => (a.id < b.id) ? 1 : -1)

         // => Updating state, not re-fetching
         setTodos(newTodos)

      } catch (error) {

         console.error('Error:', error.message);
      }
    
  };
  

  return (
    <>
      <h2>Todo App</h2>
      <h4>Add new todos via the input field:</h4>
      <TodoAdd addTodo = {addTodo} />
      <TodoList todos = {todos}
      />
    </>
  );
}

export default App;