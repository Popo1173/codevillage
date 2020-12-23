import React, { useState } from 'react'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    console.log('value:', value)

    const handleSubmit = e => {
        e.preventDefault()
        if (value === '') {
            return alert('未入力です');
          }
        //todoの配列にvalueを追加する
        addTodo(value)

         //入力値を空にする
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={e => {
                    setValue(e.target.value)
                }}
                value={value} 
            />
        </form>
    )
}

export default Form