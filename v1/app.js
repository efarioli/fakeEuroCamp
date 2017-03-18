var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://c1.staticflickr.com/8/7218/7294909034_d1ecd2b447_b.jpg"},
    {name: "Granite Hill", image: "http://s0.geograph.org.uk/photos/04/42/044209_6d4a56bd.jpg"},
    {name: "Mountain Goat's Rest", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Gallanach_Campsite_-_geograph.org.uk_-_36570.jpg"},
    {name: "Salmon Creek", image: "https://c1.staticflickr.com/8/7218/7294909034_d1ecd2b447_b.jpg"},
    {name: "Granite Hill", image: "http://s0.geograph.org.uk/photos/04/42/044209_6d4a56bd.jpg"},
    {name: "Mountain Goat's Rest", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Gallanach_Campsite_-_geograph.org.uk_-_36570.jpg"},
    {name: "Salmon Creek", image: "https://c1.staticflickr.com/8/7218/7294909034_d1ecd2b447_b.jpg"},
    {name: "Granite Hill", image: "http://s0.geograph.org.uk/photos/04/42/044209_6d4a56bd.jpg"},
    {name: "Mountain Goat's Rest", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Gallanach_Campsite_-_geograph.org.uk_-_36570.jpg"}
    
    ];
    
    



app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
   //get data from form and add to capgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   campgrounds.push(newCampground);
   // redirect back to campgrounds page
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The fakeCamp Server Has Started!");
});