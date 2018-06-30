const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_demo');

// POST MODEL - title, content
const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Post = mongoose.model('Post', postSchema);

// USER MODEL - email, name
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema] //this is how we can embed data...we have to use schema instead of model. this is one-to-many relationship.
                      //A user can have many posts but a post can belong to one user. We also have to declare post model before user model.
});

const User = mongoose.model('User', userSchema);

// test a new user
const newUser = new User({
  email: 'johndoe@gmail.com',
  name: 'John Doe'
});

// To create the user-post relationship:
// newUser.posts.push({
//   title: 'Embedded Data',
//   content: 'Embedded data concept test'
// });

// newUser.save((err, user) => {
//   if(err) console.log(err);
//   else console.log(user);
// });

// test a new post
// const newPost = new Post({
//   title: 'Title Test',
//   content: 'Content test ....'
// });

// newPost.save((err,post) => {
//   if(err) console.log(err);
//   else console.log(post);
// });

// how to find an existing user and add new posts
User.findOne({name: 'John Doe'}, (err, user) => {
  if(err) console.log(err);
  else {
    user.posts.push({
      title: 'New Post',
      content: 'Test new post content'
    });
    user.save((err, user) => {
      if(err) console.log(err);
      else console.log(user);
    });
  }
});
