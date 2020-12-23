import React from 'react'

const Item = ({ content, id, deleteTodo, isDone, setIsDone }) => {

    const  handleDelete = () => {
        // console.log('deleteTodo:' , deleteTodo)
        deleteTodo(id)
    }
    return (
        <li>
            <input type='checkbox' onChange={() => {
                setIsDone(!isDone)
            }} />
            <span style={
                {textDecoration: isDone ? 'line-through' : 'none'}
            }>{content}</span>
            <button onClick={handleDelete}>削除</button>
        </li>
    )
}

export default Item