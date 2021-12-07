const { writeFileSync } = require('fs')

for(i=0;i<10000;i++) {
    writeFileSync('./content/big-file.txt',`Hello World ${i}\n`, {flag:'a'});
}