const {readFile, writeFile} = require('fs');

console.log('start'); //1
readFile( './content/first.txt','utf-8', (err, result)=>{

    if(err){console.log(err);return}

    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){console.log(err);return ;}
        
        const second = result;
        writeFile(
            './content/result-sync.txt',
            `Here is the result: ${first}, ${second}`,
            (err,result) =>{
                if(err){console.log(err);return ;}
                console.log('done with this task'); //2
            }
        )
    })
}) 
console.log('staring'); //3 