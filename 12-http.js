const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("Welcome to home page");
    }
    if(req.url === '/about') {
        res.end("Here is our short story");
    }
    res.end(`
        <h1>Oops!!!</h1>
        <p>You seem to be on wrong page</p>
        <a href ="/">back to home page</a>
    `);
})

server.listen(5000);