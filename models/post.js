var mongoose = require('mongoose');
var Schema = mongoose.Schema;  // constructor function

var PostSchema = new Schema({
  bloggerName: String,
  postTitle: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  postImage: String,
  postContent: String,
  date: { type: Date, default: Date.now },
  postDate: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Post', PostSchema);