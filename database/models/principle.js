var crypto = require('crypto');
var mongoose = require('mongoose');

var principleSchema = mongoose.Schema({
  text: String,
  author: String
});

var Principle = mongoose.model('Principle', principleSchema);

// principleSchema.pre('save', function(next) {
//   var code = createSha(this.url);
//   this.code = code;
//   next();
// });

module.exports = Principle;