import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import shortid from 'shortid'

const App = () => {
    const [todos, setTodos] = useState([
        {
            content: '課題をする',
            id: shortid.generate()
        },
        {
            content: '洗濯をする',
            id: shortid.generate()
        },
        {
            content: '電話をする',
            id: shortid.generate()
        }
    ])
    
    //配列todosにvalueの値が格納される
    const addTodo = content => {
        setTodos([
            ...todos,
            {
                content: content,
                id: shortid.generate(),
            }
        ])
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const [isDone, setIsDone] = useState(false)

    return (
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deleteTodo={deleteTodo} isDone={isDone}  setIsDone={setIsDone} />
        </>
    )
}

export default App