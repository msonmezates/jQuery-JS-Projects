const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app');

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

const Cat = mongoose.model('Cat', catSchema);

// this is one way to create data
// const george = new Cat({
//   name: 'Mrs. Norris',
//   age: 7,
//   temperament: 'Evil'
// });

// george.save(function(err, cat) {
//   if(err) {
//     console.log('Something went wrong!');
//   } else {
//     console.log('Data is saved in database');
//     console.log(cat);
//   }
// });

// better way is to use built-in create() method
Cat.create({
  name: 'Snow White',
  age: 15,
  temperament: 'Bland'
}, (err, cat) => {
  if(err) console.log(err);
  else console.log(cat);
});

Cat.find({}, (err, cats) => {
  if(err) {
    console.log('Error');
    console.log(err);
  } else {
    console.log('ALL THE CATS');
    console.log(cats);
  }
});