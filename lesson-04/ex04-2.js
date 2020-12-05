function scoring(score) {
    // ここを埋める
    if(score >= 100){
        return "秀"
    } else if(score >= 60) {
        return "良"
    } else if(score >= 30)
        return "不可"
  }
  // 動作確認
  console.log(scoring(100)) //=> 秀
  console.log(scoring(60)) //=> 良
  console.log(scoring(30)) //=> 不可


// function socring(score){
//     if(score >= 100){
//          const resulet = "秀"
//          return resulet
//     } else if(score >=60) {
//         const resulet = "良"
//         return resulet
//     } else if(score >=30){
//         const resulet = "不可"
//         return resulet    }
// }
// const good = socring(100)
// console.log(good) //=> 秀
// const usually = socring(60)
// console.log(usually) //=> 秀
// const notGood = socring(30)
// console.log(notGood) //=> 秀



