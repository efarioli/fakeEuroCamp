var express = require('express');
var router = express.Router();
var Campground = require('../models/campground');
// INDEX - Show all Campgrounds
router.get('/', function (req, res) {
  // Get all campgrounds from DB
  console.log(req.user)
  Campground.find({}, function (err, allCampgrounds) {
    if (err) {
      console.log(err)
    } else {
      res.render('campgrounds/index', {
        campgrounds: allCampgrounds
      })
    }
  })
})

// CREATE - Add new campground to DB
router.post('/', function (req, res) {
  // get data from form and add to capgrounds array
  var name = req.body.name
  var image = req.body.image
  var desc = req.body.description
  var newCampground = {
    name: name,
    image: image,
    description: desc
  }
  // Create a new campground and save to Db
  Campground.create(newCampground, function (err, newlyCreated) {
    if (err) {
      console.log(err)
    } else {
      // redirect back to campgrounds page
      res.redirect('/campgrounds')
    }
  })
})

// NEW - show form to create new campground
router.get('/new', function (req, res) {
  res.render('campgrounds/new')
})

// SHOW - Shows more info about one campground
router.get('/:id', function (req, res) {
  // find the campground with provided ID
  Campground.findById(req.params.id).populate('comments').exec(function (err, foundCampground) {
    if (err) {
      console.log(err)
    } else {
      console.log(foundCampground)
      // render show template with that campground
      res.render('campgrounds/show', {
        campground: foundCampground
      })
    }
  })
})

// Middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/Login');
}

// Middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/Login');
}

module.exports = router;