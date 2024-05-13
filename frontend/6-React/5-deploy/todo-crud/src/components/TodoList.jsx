import React from 'react';
import Todo from './TodoItem';

function TodoList({todos, completeTodo, deleteTodo, editTodo}) {

    const listTodos = todos.map((todo) => {
            return <Todo 
                        key = {todo.id} 
                        todo={todo} 
                        completeTodo = {completeTodo} 
                        deleteTodo = {deleteTodo} 
                        editTodo = {editTodo} 
                    />
            });

    return (
        <>
           <ul>{listTodos}</ul>
        </>
    )

}

export default TodoList;