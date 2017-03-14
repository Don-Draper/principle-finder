var request = require('request');
var Principle = require('./database/models/principle');
var db = require('./database/dbconfig');

exports.fetchPrinciples = function(req, res) {
  Principle.findAll({}).exec(function(err, principles){
    res.status(200).send(principles);
  });
};








// exports.savePrinciple = function(req, res) {
//   var prince = req.body.text;

//   Principle.
// }