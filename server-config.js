var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');

// var util = require('./lib/utility');
// var handler = require('./lib/request-handler'); //from shortly deploy

var app = express();

app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname + '/public'));

app.get('/', );
app.get('/compassionate', );
app.get('/grateful', );
app.get('/gritty', );

app.get('/*', );

module.exports = app;