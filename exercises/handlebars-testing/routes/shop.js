const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products
    res.render('shop', {prods: products, 
        hasProducts: products.length > 0, 
        activeShop: true,
        productsCSS: true
    });
});

module.exports = router;