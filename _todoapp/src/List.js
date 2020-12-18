import React from 'react'
import Item from './Item'

const List = ({todos}) => {
    return(
        <ul>
            {
                // 配列todosに含まれる要素をItemコンポーネントの呼び出しに変換
                todos.map((todo, index) => {
                    return(
                        <Item content = {todo.content} key={index}/>
                    )
                })
            }
        </ul>
    )
}
export default List