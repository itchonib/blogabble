const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    comment: String,
    date: Date,
    post_id: mongoose.Schema.Types.ObjectId,
    owner: String
  });

module.exports = mongoose.model('Comment', CommentSchema)