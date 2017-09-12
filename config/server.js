var consign = require('consign');
//Import express module
var app = require('express')();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
//Set view engine
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
.include('./db')
.then('./app/models')
.then('./app/routes')
.into(app);

module.exports = app;