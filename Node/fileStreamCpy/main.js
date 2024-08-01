const fs = require('fs');

var a=fs.createReadStream('abc.txt');
var b=fs.createWriteStream('new.txt');

a.pipe(b);