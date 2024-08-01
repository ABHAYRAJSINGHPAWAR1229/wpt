const fs = require('fs');
const path = require('path');

// Utility function to count words in a string
function countWords(text) {
    return text.split(/\s+/).filter(Boolean).length;
}

// Read files asynchronously
const file1 = path.join(__dirname, 'mydata.txt');
const file2 = path.join(__dirname, 'myfile.data');

fs.promises.readFile(file1, 'utf-8')
    .then(data1 => {
        console.log(`Number of words in ${file1}: ${countWords(data1)}`);
        return fs.promises.readFile(file2, 'utf-8');
    })
    .then(data2 => {
        console.log(`Number of words in ${file2}: ${countWords(data2)}`);
    })
    .catch(error => {
        console.error('Error reading files:', error);
    });
