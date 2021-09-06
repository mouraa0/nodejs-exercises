const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('./shop/product-list', {
            prods: products,
            path: '/products',
            pageTitle: 'My Shop'
        });
    });
};

exports.getProduct = (req, res, next) => {
    const proId = req.params.productId;
    Product.findById(proId, product => {
        res.render('shop/product-detail.ejs', {
            product: product,
            pageTitle: 'Product details',
            path: ''
        });
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('./shop/index', {
            prods: products,
            path: '/',
            pageTitle: 'My Shop'
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('./shop/cart', {
        path: '/cart',
        pageTitle: 'Cart',
    });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
    res.render('./shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders',
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('./shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};
