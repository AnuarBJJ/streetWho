var streets = require('../controllers/streets.js')

module.exports = function(app){

	app.get('/questions/:id', function(req, res){
		streets.getOne(req, res);
	})


}