const express = require('express');
const app = express();
const logger = require('./logger')

// req =>  middleware => res

app.use(logger); //to automatically use logger in every api

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