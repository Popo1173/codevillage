import React from 'react'
import Item from './Item'

const List = ({ todos, deleteTodo, isDone, setIsDone }) => {
    return(
        <ul>
            {
                todos.map((todo) => {
                    return(
                        <Item 
                            content={todo.content}  
                            id={todo.id}
                            key={todo.id}
                            deleteTodo={deleteTodo}
                            isDone={isDone}
                            setIsDone={setIsDone}
                        />
                    )
                })
            }
        </ul>
    )
}

export default List