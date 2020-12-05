
//--------------------------------
//課題09-02

// 課題09-1で作成したプログラムを拡張して、各<li>が以下のように画像つきになるように機能追加してください。
// <li>
//   <img src="http://placehold.it/64x64" alt="アイテム1">
//   <span>アイテム1</span>
// </li>
//--------------------------------


//ボタンID add を取得する
const addButton = document.getElementById('add');

//リストID listの中のliを取得する 取得しなくても大丈夫そう....
const list = document.getElementById('list');



//id add が押下されと時の処理
addButton.addEventListener('click',(event) => {

    //<li>を作成して、変数itemliに代入する（itemliはforEarchの中で利用する)
    const newItemLi = document.createElement('li') 
    let itemLi = list.appendChild(newItemLi)

    //<img>を作成して、変数itemImageに代入する（itemImageはforEarchの中で利用する)
    const newImage = document.createElement('img')
    let itemImage = list.appendChild(newImage)


    //forEacrchで繰り返しするための、配列にしてあげる変数「<ul id="#list"><li>」を代入する
    const items = document.querySelectorAll('#list li')
    


    //取得した<li>要素をindex引数を持って繰り返す
    items.forEach( function(item, index){

        //<li>の中にinnerHtmlで<span>を入れてインデックス番号を取得
        newItemLi.innerHTML = `<span>アイテム${index}</span>`
        
        



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


