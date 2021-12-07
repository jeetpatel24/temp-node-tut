const {createReadStream} = require('fs');

const stream = createReadStream('./content/big-file.txt', {
    highWaterMark:90000
});

// default - 64Kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big-file.txt', {highWaterMark:90000})
// const stream = createReadStream('../content/big-file.txt', {encoding: 'utf8'})

stream.on('data',(result) => {
    console.log(result);
})