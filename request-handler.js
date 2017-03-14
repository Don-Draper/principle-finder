var request = require('request');
var Principle = require('./database/models/principle');
var db = require('./database/dbconfig');

exports.fetchPrinciples = function(req, res) {
  console.log('Reached fetchPrinciples');
  // console.log('Request: ', req);
  Principle.find({}).exec(function(err, principles){
    console.log(principles);
    console.log(err);
    res.status(200).send(principles);
  });
};

exports.savePrinciple = function(req, res) {
  var prince = req.body.text;
  var cat = req.body.category;

  Principle.findOne({ text: prince, category: cat }).exec(function(err, found) {
    if (found) {
      res.status(200).send(found);
    } else {
      var newPrince = new Principle({
        text: prince,
      });
      newPrince.save(function(err, newPrince) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(newPrince);
        }
      });
    }
  });
};






// exports.savePrinciple = function(req, res) {
//   var prince = req.body.text;

//   Principle.
// }