//Stateを使う
import React, { useState } from 'react'

//{ addTodo }データを渡す
const Form = ( { addTodo } ) => {
    //inputの入力値をstateで管理
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        //submit時のリロードをキャンセル
        e.preventDefault()

        //valueが空の場合はアラートで処理を終了する
        if(value === ''){
            return alert('未入です。')
        }

        //valueの値をaddTodoで更新
        addTodo(value)

        //setValue実行してvalueを空に更新
        setValue('')
    }

    return(
        <form className="inputSelect" onSubmit={handleSubmit}>
            <input type='text' 
                //onchangeしたら　valueの値をe.target.valueで書き換え
                onChange={ e => {
                    setValue(e.target.value)
                }}
                value={value}
            />
        </form>
        
    )
}

export default Form