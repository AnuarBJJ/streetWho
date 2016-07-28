var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var streetSchema = new mongoose.Schema({
	name: String,
	info: String
})

var Street = mongoose.model('street', streetSchema);