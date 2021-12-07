var http = require('http');
var fs = require('fs');

// Because of the readFileSync and res.end, the file sent to the client is of the same size we have with us
// That should not happen beaciuse sending large amount os data over the internet is not preferred.
// here is the solution
// we can use createReadStream which will read data in small chunks

//pipe() method will convert readStream to writeStream so that if we are able to read data in chunks
//then we can also write data in chunks

http
    .createServer(function (req, res) {
        // const text = fs.readFileSync('./content/big-file.txt', 'utf8');
        // res.end(text);

        const fileStream = fs.createReadStream('./content/big-file.txt', 'utf8');
        fileStream.on('open', () => {
            fileStream.pipe(res);
        })

        fileStream.on('err', (err) => {
            res.end(err);
        })
    })
    .listen(5000);