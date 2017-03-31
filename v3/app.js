var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campground");

mongoose.connect("mongodb://localhost/fake_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//SCHEMA SETUP



app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - Show all Campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("index", {campgrounds: allCampgrounds});
        }
    })
    
});

//CREATE - Add new campground to DB
app.post("/campgrounds", function(req, res) {
   //get data from form and add to capgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCampground = {name: name, image: image, description: desc};
   // Create a new campground and save to Db
   Campground.create(newCampground, function(err, newlyCreated) {
       if(err){
           console.log(err);
       }else{
           // redirect back to campgrounds page
           res.redirect("/campgrounds");
       }
   });
   
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res) {
   res.render("new");
});

//SHOW - Shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        };
    });
    
});

app.listen('3000', 'localhost', function() {
    console.log("The fakeCamp Server Has Started!");
});