// const tree = document.body;
//innerHTHMLメソッドを使って
// const createHtml = document.createElement('div');
// createHtml.innerHTML = `
//     <h1>DOM</h1>
//     <p>JavaScriptからHTMLを扱うための仕組み</p>
//     <h2>印象に残っているトピック</h2>
//     <ul>
//     <li>documentオブジェクト</li>
//     <li>getElementById</li>
//     <li>イベントリスナ</li>
//     </ul>
// `;
// document.body.appendChild(createHtml);


const tree = document.body;
const newItemh1 = document.createElement('h1'); //h1を作成
const newItemp = document.createElement('p'); //pを作成
const newItemUl = document.createElement('ul');//ulを作成

//h1
newItemh1.textContent = "DOM";
tree.appendChild(newItemh1);

//p
newItemp.textContent= "JavaScriptからHTMLを扱うための仕組み";
tree.appendChild(newItemp);

//ulを作成して、liに入る値を配列にしてliに入れる
tree.appendChild(newItemUl); 
let list =['documentオブジェクト', 'getElementById', 'イベントリスナ'];
for(let i = 0; i < list.length; i++){
    const newItemli = document.createElement('li'); //forの中でliを作成
    newItemli.textContent = list[i]; //作成した「li」に配列に値を戻す
    newItemUl.appendChild(newItemli); //ulの下にアペンドする
}
console.log(tree.nodeName);

