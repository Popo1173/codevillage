//JSXをBabelでcreateElement()で変換するパッケージ
import React from 'react'
//ReactDOMをインポートする
import ReactDOM from 'react-dom'
//APP.jsをインポートする
import App from './App'


ReactDOM.render(
    <App />,
    document.getElementById('root')
)