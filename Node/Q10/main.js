const express = require('express');
const path = require('path');
const app = express();

const port = 5500;

app.use(express.static(path.join(__dirname + '/public')))

// app.use((req,res)=>{
//     //res.sendFile(path.join(__dirname + '/public/index.html'))
//     res.status(404);
//     res.send("<h1>hiii</h1>")
// })

// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// })

const isPrime=(n)=>{
 if(n<=1)
    return false;
for(let i=2;i<=n/2;i++)
{
    if(n%i===0){
        return false;
        
    }
}
return true;
}

app.get('/prime',(req,res)=>{
    console.log("check");
    const nums=parseInt(req.query.num);
    console.log(nums);
    const ab=isPrime(nums)?`number is prime`:`number is not prime`
    console.log(ab);
    res.send(nums+" "+ab );
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})