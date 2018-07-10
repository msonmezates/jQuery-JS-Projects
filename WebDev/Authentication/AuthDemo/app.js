const express = require('express'),
mongoose = require('mongoose'),
passport = require('passport'),
bodyParser = require('body-parser'),
LocalStrategy = require('passport-local'),
passportLocalMongoose = require('passport-local-mongoose'),
User = require('./models/user');

mongoose.connect('mongodb://localhost/auth-demo');
const app = express();

app.use(require('express-session')({
  secret: 'This is the secret part',
  resave: false,
  saveUninitialized: false
}));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ROUTES

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/secret', (req, res) => {
  res.render('secret');
});

// Auth Routes

// Show Signup form
app.get('/register', (req,res) => {
  res.render('register');
});
// Handle User Signup
app.post('/register', (req,res) => {
  const { username, password } = req.body;
  User.register(new User({ username }), password, (err, user) => {
    if(err) console.log(err);
    passport.authenticate('local')(req, res, () => { // we are using local strategy
      res.redirect('/secret');
    });
  });
});

app.listen(process.env.PORT || 3000, () => console.log('Server has started...'));