const check=()=>{

    var str=""
    for(var i=1;i<=100;i++){
        if(parseInt(i%3)==0 && parseInt(i%5)==0){
            str+=i +" fizzbuzz ||";
        } 
        else if(parseInt(i%3)==0){
            str+=i +" fizz ||";
        }
        else if(parseInt(i%5)==0){
            str+=i +" buzz ||";
        }
    }

    return str;
}

module.exports={
    check
}