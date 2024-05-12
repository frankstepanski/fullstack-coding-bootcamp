import React, {useState} from 'react';
import { listoftodos } from './data/STORE';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import './App.css';

import { v4 as uuidv4 } from 'uuid';

function App() {
   const [todos, setTodos] = useState(listoftodos);

  const addTodo = text => {
    const newTodos = [
         ...todos,
         {
           id: uuidv4(),
           text: text,
           isCompleted: false
          }
    ];
    setTodos(newTodos);
  };

  
  return (
    <>
      <h2>Todo App</h2>
      <h4>Add new todos via the input field:</h4>
      <TodoAdd addTodo = {addTodo} />
      <TodoList
             todos = {todos}
      />
    </>
  );
}

export default App;