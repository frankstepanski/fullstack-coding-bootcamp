import { NextResponse } from 'next/server';
import { listoftodos } from '@/db/store';

// This is our "database"
const todos = listoftodos;

export const GET = async (request) => {
    try {
        return NextResponse.json({
            status: 200,
            todos: [
                    ...todos
                ]
            })
    }
    catch (e) {
        return {
            status: 500,
            body: {error: e.message}
        };
    }
}

export const POST = async (request) => {
    try {
        const body = await request.json();
        const newTodo = {
            id: uuid4(),
            text: body.text,
            isCompleted: false
        }
        todos.push(newTodo);
        return {
            status: 201,
            body: newTodo
        }
    }
    catch (e) {
        return {
            status: 500,
            body: {error: e.message}
        };
    }
}

export const PUT = async (request) => {
    try {
        const body = await request.json();
        const todo = todos.find(todo => todo.id === body.id);
        if (todo) {
            todo.text = body.text;
            return {
                status: 200,
                body: todo
            }
        }
        return {
            status: 404,
            body: {error: "todo not found"}
        }
    }
    catch (e) {
        return {
            status: 500,
            body: {error: e.message}
        };
    }
}

export const DELETE = async (request) => {
    try {
        const body = await request.json();
        const index = todos.findIndex(todo => todo.id === body.id);
        if (index !== -1) {
            todos.splice(index, 1);
            return {
                status: 200,
                body: {id: body.id}
            }
        }
        return {
            status: 404,
            body: {error: "todo not found"}
        }
    }
    catch (e) {
        return {
            status: 500,
            body: {error: e.message}
        };
    }
}
