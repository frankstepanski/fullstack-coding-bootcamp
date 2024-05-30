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
   
      // define async function in useEffect
      async function fetchData() {

        try {

          const todosData = await fetchAPI(URL, options);
          // sorts the todos by id in descending order
          todosData.sort((a, b) => (a.id < b.id) ? 1 : -1)
          setTodos(todosData);

        } catch (error) {
 
            console.error('Error fetching data:', error.message);
            setError('Error fetching data. Please try again later.');
        }
      }

      // Calling the async function defined in useEffect
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
      
        // Step 1: Posting the data to the API
        // Executing the POST request to add a new todo in my API
         const newTodo = await fetchAPI(URL, options);
         const newTodos = [...todos, newTodo].sort((a, b) => (a.id < b.id) ? 1 : -1)

         // Step 2: Posting (adding) the data to state
         // => Updating state, triggering re-render with new todo
         setTodos(newTodos)

         // Note: By adding the new todo to the API first, 
         // this is called pessimistic updating (as opposed to optimistic updating)
      } catch (error) {

         console.error('Error:', error.message);
      }
    
  };
  
  const completeTodo = async (id) => {

    const temporaryTodos = [...todos];
    const index = temporaryTodos.findIndex(todo => todo.id === id);
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;

    const updatedTodo = {
      text: temporaryTodos[index].text,
      isCompleted: temporaryTodos[index].isCompleted
    }

    let options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTodo)
    };

    try {

      await fetch(`${URL}/${id}`, options)

      // => Updating state, not re-fetching
      setTodos(temporaryTodos);

    } catch (error) {

      console.error('Error:', error.message);
    }

  };

  const deleteTodo = async (id) => {
    
    let options = {
      method: 'DELETE'
    };

    try {

       const resDelete = await fetch(`${URL}/${id}`, options);

       if (!resDelete.ok) {
          throw new Error('DELETE failed')
       } 
    
       // => Re-fetching API to see latest changes (optional)
       const res = await fetch(URL);
       const data = await res.json();

       setTodos(data);

    } catch(error) {

      console.error('Error:', error.message);
    }
  };


const editTodo = async (id, text) => {

    try {
    
        const temporaryTodos = [...todos];
        const index = temporaryTodos.findIndex(todo => todo.id === id);
        temporaryTodos[index].text = text;

        const updatedTodo = {
          text,
          isCompleted: temporaryTodos[index].isCompleted
        }

        let options = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedTodo)
        };

        await fetch(`${URL}/${id}`, options)

        // => Updating state, not re-fetching
        setTodos(temporaryTodos);
  
    } catch(error) {

      console.error('Error:', error.message);
    }
  };

  return (
    <>
      <h2>Todo App</h2>
      <h4>Add new todos via the input field:</h4>
      <TodoAdd addTodo = {addTodo} />
      <TodoList
             todos = {todos}
             completeTodo={completeTodo}
             deleteTodo = {deleteTodo}
             editTodo = {editTodo}
      />
    </>
  );
}

export default App;