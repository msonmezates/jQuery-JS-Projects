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

passport.use(new LocalStrategy(User.authenticate())); //enable middleware
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ROUTES
const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) return next();
  res.redirect('/login');
}

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/secret', isLoggedIn, (req, res) => { // isLoggedIn checks if user's logged in or logged out
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

// LOGIN Routes
// Render Login form 
app.get('/login', (req, res) => {
  res.render('login');
});
// Login Logic
// middleware
app.post('/login', passport.authenticate('local', {
  successRedirect: '/secret',
  failureRedirect: '/login'
}), (req, res) => {
});

// Logout Routes
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, () => console.log('Server has started...'));