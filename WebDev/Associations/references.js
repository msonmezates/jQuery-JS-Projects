const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog_demo_2');

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
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
});

const User = mongoose.model('User', userSchema);

// User.create({
//   email: 'johndoe@gmail.com',
//   name: 'John Doe'
// });

// Post.create({
//   title: 'Test 3',
//   content: 'bla bla bla'
// }, (err, post) => {
//   User.findOne({name:'John Doe'},(err, foundUser) => {
//     if(err) console.log(err);
//     else {
//       foundUser.posts.push(post);
//       foundUser.save((err, data) => {
//         if(err) console.log(err);
//         else console.log(data);
//       })
//     } 
//   });
// });

User.findOne({name:'John Doe'}).populate('posts').exec((err, user) => {  //this is how to show data instead of ids => ```.populate().exec()```
  if(err) console.log(err);
  else console.log(user);
});




