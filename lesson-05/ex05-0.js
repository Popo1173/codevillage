const json = `
[
  { "id": 1, "name": "Taro", "comments": ["hello", "world"] },
  { "id": 2, "name": "Jiro", "comments": ["looks good to me"] },
  { "id": 3, "name": "Saburo", "comments": ["hi", "yes", ":)"] }
]
`

const users = JSON.parse(json)
console.log(users) //=> (JavaScriptの配列)

// const users = [
//     { id: 1, name: 'Taro', comments: ['hello', 'world'] },
//     { id: 2, name: 'Jiro', comments: ['looks good to me'] },
//     { id: 3, name: 'Saburo', comments: ['hi', 'yes', ':)'] },
// ]
// console.log(users[1])
// //1番目のユーザー名を取り出す
// console.log(users[1].name)
// //1番目のユーザーの0番目のコメント取り出す
// console.log(users[1].comments[0])
// //0番目のユーザーの1番目のコメント取り出す
// console.log(users[0].comments[1])