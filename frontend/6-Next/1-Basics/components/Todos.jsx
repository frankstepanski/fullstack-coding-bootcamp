'use client';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import TodoCard from './TodoCard';

/*
    This is a client component, which means that the component is rendered on the client side.

    To determine whether to use a client or server component, ask yourself:
    
        - Does the user need to see the content immediately?
        - Does the content require user interaction?
        - Does the content require a specific user state?

*/

const Todos = () =>{
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const fetchTodos = async () => {
            try {

                // Our client component is fetching data from the server component
                const res = await fetch('/api/todos');
                
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                
                const data = await res.json();

                setTodos(data.todos);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchTodos();

    }, []);

        return loading ? (
            <Spinner />
          ) : (
            <ul>
                {todos.map((todo) => (
                    <TodoCard key={todo.id} todo={todo} />
                ))}
            </ul>
          );
}

export default Todos;