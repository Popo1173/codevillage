
//--------------------------------
//課題09-01

//「追加」ボタンを押すと、<ul id="list">の最後に<li>要素が追加される。
//このとき、<li>のテキストはアイテム1, アイテム2, ...のようにその要素が何番目かに応じて番号を振る。

//--------------------------------


//ボタンID add を取得する
const addButton = document.getElementById('add');

//リストID listの中のliを取得する
const list = document.getElementById('list');

//id add が押下されと時の処理
addButton.addEventListener('click',(event) => {
    //<li>を作成する
    const newItemLi = document.createElement('li') 
    //作成した<li>を変数itemLiに代入する
    let itemLi = list.appendChild(newItemLi)

    //変数itemに取得した「<ul id="#list"><li>」を代入する
    const items = document.querySelectorAll('#list li')
    
    //取得した<li>要素をindex引数を持って繰り返す
    items.forEach( function(item, index){
        //<li>の中にindexつき文字列を挿入する
        newItemLi.textContent = '新アイテム'+ index
        //<ul id="#list">の中に追加していく
        list.appendChild(itemLi)     
        // console.log(index);
    })
})


//無理やりできたものを↑で整形
// addButton.addEventListener('click',(event) => {
//     const newItemLi = document.createElement('li')
//     newItemLi.textContent = '新アイテム'
//     list.appendChild(newItemLi)

//     const items = document.querySelectorAll('#list li')
//     items.forEach( function(item, index){
//         newItemLi.textContent = '新アイテム'+index
//         list.appendChild(newItemLi)     
//         // console.log(index);
//     })
// })


