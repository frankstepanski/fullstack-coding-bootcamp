import React from 'react';
import Todo from './TodoItem';

function TodoList({todos}) {

    const listTodos = todos.map((todo) => {
            return <Todo 
                        key = {todo.id} 
                        todo={todo} 
                    />
            });

    return (
        <>
           <ul>{listTodos}</ul>
        </>
    )

}

export default TodoList;