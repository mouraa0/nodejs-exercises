const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const products = [];

router.use(bodyParser.urlencoded({extended: false}));

router.get('/add-products', (req, res, next) => {
    res.render('add-products', {path: '/add-products', pageTitle: 'Add Products'});
});

router.post('/add-products', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
