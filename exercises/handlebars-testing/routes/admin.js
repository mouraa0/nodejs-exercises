const express = require('express');
const bodyParser = require('body-parser');

const products = []

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

router.get('/add-products', (req, res, next) => {
    res.render('add-products', {pageTitle: 'Add Products', activeProds: true, formsCSS: true, productsCSS: true});
});

router.post('/add-products', (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/');
});

exports.products = products;
exports.routes = router;
