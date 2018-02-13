var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [{
		name: "Butterfly campsite - lake garda",
		image: "http://www.campingbutterfly.it/media/k2/galleries/116/gal-boheme-verde_005.jpg",
		description: "Camping Butterfly is a welcoming site, located just a short walk to the beach on the southern banks of Lake Garda. This is a superb location for young families – children will have fun in the small playground and will enjoy the separate children's swimming pool. Soak up the relaxed atmosphere either at the pool, on the attractive terrace of the bar and restaurant, or on your emplacement. During July and August, the friendly staff enjoy organising dance classes and children’s activities during the day, and live music and shows at night. This is an area which begs discovery. Why not take one of the lake steamers from Peschiera del Garda and explore the many delights that this beautiful area has to offer."
	},
	{
		name: "Castelfusano camping - Roma",
		image: "http://www.romacampingcastelfusano.it/images/gallery/originals/8321c2c3-ddb6-42c3-8c72-ab2e87ca5726.jpg",
		description: "Roma Camping Internazionale di Castelfusano - Camping in Rome. Roma Camping Internazionale di Castelfusano,surrounded by the typical Mediterranean vegetation, is the camping of Rome located along the seafront, facing a large admission free beach, situated 3 km from Ostia and 25 km from the Rome's City Center."
	},
	{
		name: "Kur Camping Erlengrund -Austria",
		image: "http://uk.zooverresources.com/images/T5404058I517044W900H675/Kur-Camping-Appartementen-Erlengrund.jpg",
		description: "Kur-camping has been run by a friendly Dutch family for ten years and is open all year. It lies in Bad Gastein, a valley in southern Salzburgerland between the Grossglockner and the Hohe Tauern mountains. This valley is one of the most beautiful in Austria, famous for its spas and wonderful mountain scenery. There are 100 generous pitches of which 90 are for touring. Fifty are on hardstandings and all have varying amounts of shade. All have 16A electricity (2-pin sockets) and most are fully serviced, including gas and a TV point. The campsite has all the necessary facilities for summer and winter camping."
	},
	{
		name: "Kur Camping Erlengrund -Austria",
		image: "http://us.zooverresources.com/images/E343620L1B2443473D0W900H675/Domaine-de-Sevenier.jpg",
		description: "Kur-camping has been run by a friendly Dutch family for ten years and is open all year. It lies in Bad Gastein, a valley in southern Salzburgerland between the Grossglockner and the Hohe Tauern mountains. This valley is one of the most beautiful in Austria, famous for its spas and wonderful mountain scenery. There are 100 generous pitches of which 90 are for touring. Fifty are on hardstandings and all have varying amounts of shade. All have 16A electricity (2-pin sockets) and most are fully serviced, including gas and a TV point. The campsite has all the necessary facilities for summer and winter camping."
	}

];

function seeDB() {
	//Remove all campgrounds
	Campground.remove({}, function (err) {
		if (err) {
			console.log(err);
		}
		console.log("remove campgrounds!");
		//add a few campgrounds
		data.forEach(function (seed) {
			Campground.create(seed, function (err, campground) {
				if (err) {
					console.log(err);
				} else {
					console.log("added a campground");
					//add a few comments
					Comment.create({
						text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
						author: "Bort"
					}, function (err, comment) {
						if (err) {
							console.log(err);
						} else {
							campground.comments.push(comment);
							campground.save();
							console.log("created new comment");
						}


					});


				}
			});
		});

	});





}

module.exports = seeDB;