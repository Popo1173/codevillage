//高階関数の具体例② イベントリスナの登録
//高階関数の具体例の2つめとして、「ボタンを押したときに処理を実行する」という例を見ていきましょう。
// const button = document.querySelector('#submit')
// button.addEventListener('click', event => { /* クリックしたときの処理 */ })


//-----------------------------------------------------------

// function (x) { return x * x } の部分が無名関数
// const list = [1, 2, 3]
// console.log(list.map(x => x * x)) // x => x * x の部分が無名関数

//-----------------------------------------------------------

// //高階関数の具体例① 配列のmap
// const list = [1, 2, 3]
// const square = x => x * x // 引数xを二乗する

// //mapは、配列の各要素について、何らかの処理をほどこして、別の要素の配列に変換するという関数です
// //「なんらかの処理」の部分を、mapの引数に関数として渡すことができます。
// console.log(list.map(square)) //=> [1, 4, 9]

//-----------------------------------------------------------

// const add2 = x => x + 2

// function twice(f, x) {
// //引数fの関数を、引数xの値に対して2回呼び出す」という関数になっています。
//   return f(f(x))
// }

// const result = twice(add2, 10)
// console.log(result) //=> 14

//-----------------------------------------------------------

const add2 = x => x + 2 // 引数xに2を足す関数
const mul2 = x => x * 2 // 引数xに2を掛ける関数

const n = 3
console.log(add2(n)) //=> 5
console.log(mul2(n)) //=> 6
console.log(mul2(add2(n))) //=> 10（3に2を足してから、その結果に2を掛ける）