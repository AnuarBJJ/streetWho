var streets = require('../controllers/streets.js')

module.exports = function(app){

	app.post('/streets', function(req, res){
		streets.getOne(req, res);
	})


}