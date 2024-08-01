const http = require('http');

const app=http.createServer((req,res)=>{
    res.end("Welcome to Node js");
})

app.listen(5000,()=>{
    console.log("server is running at port 5000")
})