var mongoose = require('mongoose');

var Message = mongoose.Schema({
  username: String,
  message: String,
  date: {type: Date, default: new Date()},
  avatar_path: String,
  image_path: String
});

module.exports = mongoose.model('Message', Message)