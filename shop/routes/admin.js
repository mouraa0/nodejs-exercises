const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

router.get('/add-products', productsController.getAddProducts);

router.post('/add-products', productsController.postAddProducts);


module.exports = router;
