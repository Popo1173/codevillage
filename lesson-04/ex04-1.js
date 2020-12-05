function cointoss(){
    //50%づつの確率にするため「乱数で1か2しか取得しない」
    //乱数に「*2+1」にして、小数点以下を切り捨てる
    //例) 乱数0.5*2+1：1.0+1 =1.1 = 1
    //例) 乱数0.7*2+1：1.4+1 =2.4 = 2
    const num = Math.floor(Math.random()*2+1)
        if(num ==  1){
            console.log('表')
            } else {
                console.log('裏')
        }
    console.log(num);
}
    for(let i = 0; i<10; i++){
    cointoss(i)
    }