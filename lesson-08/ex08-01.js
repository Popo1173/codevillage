var ver1 = document.getElementById('kaimono');
//#kaimono の孫要素
console.log(ver1.children[1].children[0].textContent);
// console.log(ver1.children[1].children[0].nodeName);
// console.log(ver1.children[1].firstChild.nodeName);

// console.log(ver1.children[0].nodeName);
// console.log(ver1.firstChild.nodeName);

var ver2 = document.getElementById('todo');
console.log(ver2.children[0].textContent); //todoリスト
console.log(ver2.firstChild.textContent); //空白ノード

console.log(ver2.children[1].children[1].textContent); //課題をやる
console.log(ver2.children[1].firstChild.textContent); //空白ノード







// var ver2 = document.firstChild.children[0];
// console.log(ver2.nodeName)
