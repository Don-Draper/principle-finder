var crypto = require('crypto');
var mongoose = require('mongoose');

var principleSchema = mongoose.Schema({
  text: String,
  category: String
});

var Principle = mongoose.model('principledb', principleSchema);

// principleSchema.pre('save', function(next) {
//   var code = createSha(this.url);
//   this.code = code;
//   next();
// });

module.exports = Principle;