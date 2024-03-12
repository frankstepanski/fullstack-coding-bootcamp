'use client';
import React from "react";

function Todo({ todo}) {

    return (
        <li>
             <input type="checkbox" checked = { todo.isCompleted } />
             <span style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}> {todo.text} </span>
        </li>
    );
}

export default Todo;