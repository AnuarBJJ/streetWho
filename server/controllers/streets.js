var mongoose = require('mongoose');

var Street = mongoose.model('street');

module.exports = (function(){
	return {
		getOne: function(req, res){
			Street.findOne({name: req.body.name}, function(err, result){
				if(err){
					console.log('fire')
				} else {
					console.log(result)
					if(result){
						res.json(result.info);
					}
					else{
						var newStreet = new Street({
							name : req.body.name,
							info : "Come back for the info"
						});
						 
						newStreet.save(function (err, data) {
							if (err) console.log(err);
							else res.json("Interesting. New street.");
						});
					}
				}
			})
		},
		getAll: function(req, res){
			Street.find({}, function(err, streets) {
				if(err){
					console.log("problem getting all streets")
				} else{
				    // var allStreets = {};

				    // streets.forEach(function(user) {
				    //   allStreets[user._id] = user;
				    // });

				    res.send(streets);
			    }
			});
		}
	}
})()
