const scores = [100, 60, 30]

//配列の値を配列の数分だけifに入れたい
// function scoreing(score) {
//     // ここを埋める
//     if(score >= 100){
//       return "秀"
//     } else if(score >= 60) {
//       return "普通"
//     } else if(score >= 30) {
//       return "不可"
//     }
// }
scores.forEach(function(a){
  if(score >= 100){
    const a = "秀"
    return a
  } else if(score >= 60) {
    const a = "あ"
    return a
  } else if(score >= 30) {
    const a = "1"
    return a
  }
  console.log(a)
})






// console.log(scoreing(70)) //=> 秀

//配列を関数に渡す方法
// const a = ["A", "B", "C"];
// a.forEach(function (b) {
//   console.log(b + "です"); //Aです Bです Cです
// });



// function socring(score){
//     if(score >= 100){
//          const resulet = "秀"
//          return resulet
//     } else if(score >=60) {
//         const resulet = "良"
//         return resulet
//     } else if(score >=30){
//         const resulet = "不可"
//         return resulet    
//     }
// }
// const good = socring(100)
// console.log(good) //=> 秀
