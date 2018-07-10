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

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/secret', (req, res) => {
  res.render('secret');
});

app.listen(process.env.PORT || 3000, () => console.log('Server has started...'));