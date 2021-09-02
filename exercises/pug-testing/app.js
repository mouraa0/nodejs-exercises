const http = require('http');
const path = require('path');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(3000);
