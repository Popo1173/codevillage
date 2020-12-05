// 上記で登場したadd2, mul2の例を参考に、以下の数式をそれぞれ関数の組み合わせで記述してください。
// 必要な関数は適宜作成してください。
// n * 100 - 5
// (n + 3) * 8 + 3


const add1 = x => x * 100 // 引数xに2を足す関数
const mul1 = x => x - 5 // 引数xに2を掛ける関数

const n = 3
// console.log(add1(n)) //=> 300
//add1を実行してから、mul１を実行する
console.log(mul1(add1(n))) //=> 295

const add2 = x => x + 3
const mul2 = x => x * 8 + 3

// console.log(add2(n))
console.log(mul2(add2(n))) //=>51





