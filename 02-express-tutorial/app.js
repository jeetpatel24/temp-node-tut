const express = require('express');
const app = express();

var {products} = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    })

    res.json(newProducts);
})

app.get('/api/product/:productId', (req, res) => {
    const singleProduct = products.find((product) => 
        product.id === Number(req.params.productId)
    );

    if(!singleProduct) {
        res.status(404).send('Product does not exit');
    }
    res.json(singleProduct);
})

app.get('/api/product/:productId/reviews/:reviewId', (req, res) => {
    res.send('hello world');
})

app.get('/api/v1/query', (req, res) => {
    let sortedProducts = [...products];
    const {search, limit} = req.query;

    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }

    sortedProducts = sortedProducts.slice(0, Number(limit));

    if(sortedProducts.length < 1) {
        // res.status(200).send('no prodcts matched your search');
        return res.status(200).send({success:true, data:[]});
    }

    return res.json(sortedProducts);
})



app.listen(5000, ()=> {
    console.log(5000, 'server is listening on port 5000...');
})