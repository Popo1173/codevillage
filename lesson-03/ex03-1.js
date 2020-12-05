console.log("こんにちは世界！");

const word = 'JavaScript says "Hello, world!"'
//${変数}を利用して文字列結合する。　その際は「`」バッククォートで囲む
console.log(`I'm learnig Javascript!\n\n${word}\n`);

const array = [1, 2, 3]

//インデックス数
console.log(array.length)

//[2,3]
array.splice(0,1);
console.log(array);

//[2,3,5]
array.push(5)
console.log(array)

//[2]
array.splice(1,2)
console.log(array)

//100
array[0] =100
console.log(array[0])

