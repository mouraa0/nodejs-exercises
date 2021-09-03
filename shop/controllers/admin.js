const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('./admin/add-products', {
        pageTitle: 'Add Products',
        path: '/add-products'
    });
};

exports.postAddProducts = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('./admin/products', {
            prods: products,
            path: '/admin/products',
            pageTitle: 'Admin Products'
        });
    });
}