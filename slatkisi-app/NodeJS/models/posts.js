const mongoose = require('mongoose');

var Post = mongoose.model('Post', {
  title: {type: String },
  content: {type: String }
});

module.exports = { Post };
