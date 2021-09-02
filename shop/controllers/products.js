const product = [];

exports.getAddProducts = (req, res, next) => {
    res.render('add-products', {
        pageTitle: 'Add Products',
        path: '/add-products'
        });
    };

exports.postAddProducts = (req, res, next) => {
    product.push({title: req.body.title});
    res.redirect('/');
    };

exports.getProducts = (req, res, next) => {
    res.render('shop', {
        prods: product,
        path: '/',
        pageTitle: 'My Shop'
        });
    };
