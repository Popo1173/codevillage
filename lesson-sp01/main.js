//ラジオボタンの関数
function radioSwitch() {
    //ラジオボタンのnameを取得して、変数Choicesに代入する
    //name=""でもDOM取得
    Choices = document.getElementsByName('maker')
    //一つ目のradioボタンにckが入った場合
    if (Choices[0].checked) {
        // Yesが選択された時
        document.querySelector('.yesAnswer').style.display = "";
        document.querySelector('.noAnswer').style.display = "none";
    //二つ目のradioボタンにckが入った場合
    } else if (Choices[1].checked) {
        // NOが選択された時
        document.querySelector('.yesAnswer').style.display = "none";
        document.querySelector('.noAnswer').style.display = "";
    //何も選択されていない場合
    } else {
        document.querySelector('.yesAnswer').style.display = "none";
        document.querySelector('.noAnswer').style.display = "none";
    }
}
//イベント発火のタイミング
window.addEventListener('loads', radioSwitch());


//セレクトボックスの関数
function selectCharacter(){
    //selectを取得
    const select = document.querySelector('#changeSelect1');
    //selectが変わった時各.boxの内容を変更する
    select.addEventListener('change', function () {
        const boxes = document.getElementsByClassName('box');
        //select valueの値を取得する
        const val = this.value;
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.display = (i === parseInt(val)) ? 'block' : 'none';
        }
    })
}
selectCharacter()