var express = require('express');

var mongoose = require('mongoose');

var path = require('path');

var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, '/client')));

app.use(bodyParser.json());

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen('7777', function(){
	console.log("the server is listening on 7777");
})