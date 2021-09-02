const http = require('http');
const path = require('path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const express = require('express');
const expressHbl = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbl({layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, 'public')));

app.use(adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);