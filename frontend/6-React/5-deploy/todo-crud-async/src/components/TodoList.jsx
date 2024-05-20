import React from 'react';
import TodoItem from './TodoItem';

function TodoList({todos}) {

    const listTodos = todos.map((todo) => {
            return <TodoItem 
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