var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var Campground = require('../models/campground');
var Comment = require('../models/comment');
router.get('/', function (req, res) {
  res.render('landing');
})

// Show register Form
router.get('/register', function (req, res) {
  res.render('register');
})
// Handling Sign Up Logic
router.post('/register', function (req, res) {
  var newUser = new User({
    username: req.body.username
  });
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      return res.render('register');
    }
    passport.authenticate('local')(req, res, function () {
      res.redirect('/campgrounds');
    });
  });
});

// Show Login form
router.get('/login', function (req, res) {
  res.render('login');
});
// Handling LOGIN logic
// app.post("/login", middleware, callback);
router.post('/login', passport.authenticate('local', {
  successRedirect: '/campgrounds',
  failureRedirect: '/Login'
}), function (req, res) {
  // nott needed is just to be aware of middleware
});
// Logout Route
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/campgrounds');
});

// Middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/Login');
}
module.exports = router;