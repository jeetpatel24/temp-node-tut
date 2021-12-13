const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorize');
const morgan = require('morgan');

// req =>  middleware => res

// 1. use vs route
// 2. options - our own / express / third party 

//app.use([authorize, logger]);

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
})

app.get('/api/products', (req, res) => {
    res.send('<h1>Products</h1>');
})

app.get('/api/items', (req, res) => {
    res.send('<h1>Items</h1>');
})

app.listen(5000, ()=> {
    console.log(5000, 'server is listening on port 5000...');
})