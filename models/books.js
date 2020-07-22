const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  userId: String,
  canBorrow: Boolean
})

module.exports = mongoose.model('books', bookSchema)

