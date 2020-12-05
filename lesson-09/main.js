
//-----------------------------------------------------
//子要素を追加・削除する
//-----------------------------------------------------

// const addButton = document.getElementById('add')
// const removeButton = document.getElementById('remove')
// const list = document.querySelector('.list') // ※既に書いている場合は省略

// addButton.addEventListener('click', (event) => { // <button id="add">がクリックされたとき…
//   const newItem = document.createElement('li')
//   newItem.textContent = '新しいアイテム'
//   list.appendChild(newItem)
// })
// removeButton.addEventListener('click', (event) => { // <button id="remove">がクリックされたとき…
//   list.removeChild(list.lastElementChild)
// })

//-----------------------------------------------------
//要素の情報を取得する、操作する
//-----------------------------------------------------

const elem = document.querySelector('.list')

console.log(elem.textContent) //=> アイテム1 アイテム2 アイテム3
console.log(elem.innerHTML) //=> <li>アイテム1</li><li>アイテム2</li><li>アイテム3</li>
for (let i = 0; i < elem.children.length; i++) { // for文での繰り返し
  console.log(elem.children[i]) // <li>アイテム1</li>, <li>アイテム2</li>, <li>アイテム3</li> が順番に表示
}
console.log(elem.firstElementChild) //=> <li>アイテム1</li>
console.log(elem.lastElementChild) //=> <li>アイテム3</li>
console.log(elem.parentElement) //=> <body>...</body>

const elem2 = document.querySelector('img')

console.log(elem2.getAttribute('src')) //=> https://placehold.it/200x200
elem2.setAttribute('src', 'https://placehold.it/400x200') // 表示される画像が変わる


//-------------------------------------------------
//要素を見つける
//-------------------------------------------------

// // <p id="intro">...</p>要素を取得
// const intro = document.getElementById('intro')
// console.log(intro.textContent) //=> これは紹介文です。

// // <ul class="list">...</ul>要素を取得
// const list = document.querySelector('.list')
// console.log(list.children.length) //=> 3

// // <ul class="list">...</ul>の中にある<li>要素を取得
// const items = document.querySelectorAll('.list li')
// // itemsは配列（のようなもの）なので、forEachで繰り返しができる
// items.forEach((item) => {
//   console.log(item.textContent) // アイテム1, アイテム2, アイテム3 が順番に表示される
// })


//-------------------------------------------------
//アラート表示
//-------------------------------------------------
// window.alert('これはwindows.alret()で表示したアラートです。');

// //window.に限り、省略する事ができる。
// alert('これはalert()で表示したアラートです')

// //documentのプロパティにアクセスしてする例
// console.log(document.doctype)
// console.log(documnet.title)