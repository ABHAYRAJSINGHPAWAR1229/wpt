const fs = require('fs');

var data=fs.readFileSync('abc.txt');
console.log(data.toString());
fs.writeFileSync('new.txt',data);