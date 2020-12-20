const mongoose = require('mongoose');

var Test = mongoose.model('Test', {
  name: {type: String },
  salary: {type: Number }
});

module.exports = Test;
