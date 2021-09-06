const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('./admin/edit-products.ejs', {
        pageTitle: 'Add Products',
        path: '/add-products',
        editing: false
    });
};

exports.postAddProducts = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('./admin/products', {
            prods: products,
            path: '/admin/products',
            pageTitle: 'Admin Products',
        });
    });
}

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        if (!product) {
            return res.redirect('/');
        }
        res.render('./admin/edit-products.ejs', {
            pageTitle: 'Edit Products',
            path: '/edit-product',
            editing: editMode,
            product: product,
        });
    });
};