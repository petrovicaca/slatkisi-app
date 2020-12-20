const mongoose = require('mongoose');

var Employee = mongoose.model('Post', {
  name: {type: String },
  content: {type: String }
});

module.exports = {Post};
