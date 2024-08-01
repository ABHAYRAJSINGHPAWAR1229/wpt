const fs = require('fs');
const readline =require('readline')

var r1=readline.Interface({
    input:fs.ReadStream("abc.txt")
})

r1.on('line',function(data){
    console.log(data*data);
})

r1.on('close',function(){
    console.log('file closed');
})
