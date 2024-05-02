import React from "react";

function TodoItem({ todo }) {

    return (
        <li>
             <input type="checkbox" checked = { todo.isCompleted } onChange={() => completeTodo(todo.id)} />
             <span style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}> {todo.text} </span>
        </li>
    );
}

export default TodoItem;