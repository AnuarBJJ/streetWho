var mongoose = require('mongoose');

var Street = mongoose.model('street');

module.exports = (function(){
	return {
		getOne: function(req, res){
			console.log(req.params.id)
			Street.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log('fire')
				} else {
					res.json(result);
				}
			})
		}
	}
})()