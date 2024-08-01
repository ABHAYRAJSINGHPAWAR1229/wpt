const calc = require('./calc.js');
const http =require('http');

const server=http.createServer((request,response)=>{
    response.end("Result ==> " +calc.add(1,8) )
})

server.listen(1111,()=>{
    console.log('server is running on port 1111')
})