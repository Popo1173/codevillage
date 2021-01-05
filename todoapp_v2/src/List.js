import React from 'react'
import Item from './Item'

//配列todosを渡す
const List = ({ todos, deleteTodo, isDone, setIsDone }) => {
    return(
        <ul>            
            {/* 配列todosの値をArray.prototype.mapで新たな配列todoに入れて Itemコンポーネントに渡す*/}

            {
                todos.map(todo => {
                    return (
                        //Itemコンポーネントに以下のプロパティを渡す
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