//JSXをBabelでcreateElement()で変換するパッケージ
import React, { useState } from 'react'

//Formコンポーネントを呼び出す
import Form from './Form'

//Listコンポーネントをインポート
import List from './List'

//shotidをインポート
import shortid from 'shortid'

import './Style.scss'

const App = () => {
    //todo配列をstateで管理
    const [todos, setTodos] = useState([
        {
            content: '課題をする'
        },
        {
            content: '洗濯をする'
        },
        {
            content: '電話をする'
        }
    ])

    //addTodo実行時　配列todoを展開してcotentプロパティにvalueを追加する
    const addTodo = content => {
        setTodos([
            ...todos,
            {
                // オブジェクト内のkey名とvalueの変数名が同じ場合は省略
                content: content,
                //ユニークなidをshortidを使って付与する
                id:shortid.generate()
            }
        ])
    }

    //todosに追加されたidを削除する
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    //終了時の状態を管理
    const [isDone, setIsDone] = useState(false)

    return(
        // <React.Fragment>の省略
        <>
            <div>
                <h1>TODO APP</h1>
                {/* Formコンポーネント呼び出し 配列todos, setTodosをFromコンポーネントに渡す*/}
                <Form addTodo={addTodo} />
                {/* Listコンポーネント呼び出し 配列todosをListコンポーネントに渡す*/}
                <List todos={todos} deleteTodo={deleteTodo} isDone={isDone} setIsDone={setIsDone} />
            </div>
        </>
    )
}

export default App