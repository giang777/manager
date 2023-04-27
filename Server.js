const express = require("express");
const hbs = require('express-handlebars');
const fileUpload = require("express-fileupload");
const parse = require("path");
const homeRT = require('./router/home.router.js');
const apiRT = require('./router/api.router.js');
const mongoose = require("mongoose");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.engine('.hbs',hbs.engine({defaultLayout:'main',extname:'.hbs'}) );
app.set('view engine', '.hbs');
app.set('views', './views');
app.use(express.static(parse.join(__dirname, 'public')));

app.use('/', homeRT);
app.use('/delete', homeRT);
app.use('/edit', homeRT);
app.use('/search', homeRT);
app.use('/api',apiRT);


app.listen(3000, () => {

    console.log("Server đang chạy !");

})