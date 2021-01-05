//Stateを使う
import React from 'react'


// contentを引数にすることで、「props」を省略して記述
const Item = ({ content, id, deleteTodo, isDone, setIsDone }) => {

    const handleDelete = () => {
        deleteTodo(id)
    }

    return(
        <li>
            {/* チェックボックスの状態が変更したら、setIsDone関数が実行され再描画される*/}
            <input type='checkbox' 
                onChange={ () => {
                    setIsDone(!isDone)
                }}
            />

            {/* Listコンポーネントからcontentプロパティの値が渡される */}
            <span style={
                //isDoneの真偽値判定
                //isDoneがfalseの場合は「none」, trueの場合は「'line-through」
                {textDecoration: isDone ? 'line-through' : 'none'}
            }>{content}</span>
            <button onClick={handleDelete}>削除</button>
        </li>
    )
}

export default Item