const http = require('http');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const express = require('express');

const app = express();

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send(
        '<h1>Page not Found</h1>'
    );
});

app.listen(3000);