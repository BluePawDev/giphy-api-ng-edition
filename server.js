/* REQUIRES */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./modules/index');

/* USES */
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use('/', index);

/* GLOBALS */
var port = process.env.PORT || 7500;

/* SERVER LISTEN */
app.listen(port, function() {
	console.log('server up on:', port);
}); // END listen
