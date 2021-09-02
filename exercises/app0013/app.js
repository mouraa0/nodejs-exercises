const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const products = []

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
    res.render('main', {pageTitle: 'Main'});
});

app.post('/add-users', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/user')
});

app.get('/user', (req, res, next) => {
    res.render('users', {users: products, pageTitle: 'Users'}); 
});


app.listen(3000);
