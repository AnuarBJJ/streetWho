var streets = require('../controllers/streets.js')

module.exports = function(app){

	app.post('/streets', function(req, res){
		streets.getOne(req, res);
	}),

	app.get('/getall', function(req, res){
		streets.getAll(req, res)
	}),

	app.post('/insertinfo', function(req, res){
		// console.log(req.body)
		streets.inserInfo(req, res);
	})
	
}