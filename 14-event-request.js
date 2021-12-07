const http = require('http');

//using Event Emitter API
const server = http.createServer();
//emits request event (means server has in built event emitter 'request' and more... , we just need to suscribe to it/ listen for it / respond to it)

server.on('request', (req, res) => {
    res.end('welcome');
})

server.listen(5000);