var mongoose = require('mongoose');
var Schema = mongoose.Schema;  // constructor function

var CommentSchema = new Schema({
  date: { type: Date, default: Date.now },
  body: String,
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }, // what blog am I associated with
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // which logged in user created this comment
});

module.exports = mongoose.model('Comment', CommentSchema);