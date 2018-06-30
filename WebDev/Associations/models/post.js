const mongoose = require('mongoose');

// POST MODEL - title, content
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;