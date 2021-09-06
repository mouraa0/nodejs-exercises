const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

router.get('/admin/add-products', adminController.getAddProducts);

router.get('/admin/products', adminController.getProducts);

router.get('/admin/edit-product/:productId', adminController.getEditProduct);

router.post('/admin/add-products', adminController.postAddProducts);


module.exports = router;
