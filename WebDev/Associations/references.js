const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo_2');

const Post = require('./models/post');
const User = require('./models/user');

// User.create({
//   email: 'johndoe@gmail.com',
//   name: 'John Doe'
// });

Post.create({
  title: 'Test 4',
  content: 'fsdfdsfdsfs'
}, (err, post) => {
  User.findOne({name:'John Doe'},(err, foundUser) => {
    if(err) console.log(err);
    else {
      foundUser.posts.push(post);
      foundUser.save((err, data) => {
        if(err) console.log(err);
        else console.log(data);
      })
    } 
  });
});

// User.findOne({name:'John Doe'}).populate('posts').exec((err, user) => {  //this is how to show data instead of ids => ```.populate().exec()```
//   if(err) console.log(err);
//   else console.log(user);
// });




