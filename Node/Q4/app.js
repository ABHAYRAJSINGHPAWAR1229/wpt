const http = require('http');
const fizz = require('./fizz')

const server=http.createServer((req,res)=>{
    res.end(fizz.check());
})

server.listen(3000,()=>{
    console.log("server running at port 3000")
})