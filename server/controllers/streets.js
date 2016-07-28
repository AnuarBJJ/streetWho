var mongoose = require('mongoose');

var Street = mongoose.model('street');

module.exports = (function(){
	return {
		getOne: function(req, res){
			Street.findOne({name: req.body.name}, function(err, result){
				if(err){
					console.log('fire')
				} else {
					res.json(result.info);
				}
			})
		}
	}
})()