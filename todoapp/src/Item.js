import React, { useState } from 'react'

const Item = ({content}) => {
    const [isDone, setIsDone] = useState(false)

    return (
        <li>
            {/* checkが入ったらsetIsDoneが実行されtrueにり再描画される */}
            <input type='checkbox' onChange={() => {
                setIsDone(!isDone)
            }} />
            {/* trueの時打ち消し線styleをあてる */}
            <span style={
                {textDecoration: isDone ? 'line-through': 'none'}
            }>{content}</span>
        </li>
    )
}

export default Item