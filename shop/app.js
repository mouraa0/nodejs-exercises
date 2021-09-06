const path = require('path');
const http = require('http');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path: ''
    });
});

app.listen(3000);
