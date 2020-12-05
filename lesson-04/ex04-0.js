//0.0〜1.0の間のランダムな数値が作られる
const num = Math.random()


if( num > 0.5){
    console.log('大きめ')
} else {
    console.log('小さめ')
}
//numの値を出力するもの。よくやる確認方法
console.log(`数: ${num}`)

//----------------------



if(true) {
    console.log('必ずこちらが実行される')
} else {
    console.log('かならうこちらがなりたたない')
}
if (false) {
    console.log('今度はこちらが実行されない')
  } else {
    console.log('こちらが実行される')
  }