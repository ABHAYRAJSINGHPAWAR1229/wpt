const fs = require('fs');
const readline= require('readline')

var r1=readline.createInterface({
    input: fs.createReadStream('abc.txt')
})

var lineNum=0;

r1.on('line',function(data){
    lineNum++;
    console.log(lineNum+" "+data);
})

r1.on('close',function(){
    console.log("total line " +lineNum);
    console.log("File read successfully");
})
