var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');

// var util = require('./lib/utility');
var handler = require('./request-handler.js');

var app = express();

// app.use(partials());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname + '/public'));

app.get('/', handler.fetchPrinciples);
  // res.status(200).send();

// app.get('/compassionate', );
// app.get('/grateful', );
// app.get('/gritty', );

// app.get('/*', );

module.exports = app;