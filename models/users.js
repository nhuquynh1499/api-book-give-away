const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  avatar: String,
  name: String,
  email: String,
  phone: String,
  password: String
})

module.exports = mongoose.model('users', userSchema)

