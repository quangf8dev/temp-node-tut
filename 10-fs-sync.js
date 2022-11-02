const {readFileSync, writeFileSync} = require('fs')
console.log('start');
// read 1 file
const first = readFileSync('./content/first.txt', 'utf-8'); // path, utf-8: ma hoa bo dem moi doc 
//file theo ASCII duoc
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(first, second);
// write + create 1 file
writeFileSync(
    './content/result-sync.txt', //path 
    `Here is a result: ${first}, ${second}`, // data
    {flag: 'a'} // flag
)
console.log('done with this task');
console.log('starting the next one');