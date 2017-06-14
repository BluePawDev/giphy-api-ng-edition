/* REQUIRES */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./modules/index');
var randGif = require('./modules/randGif');

/* USES */
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use('/', index);
// app.use('/randGif', randGif);

/* GLOBALS */
var port = process.env.PORT || 7500;

/* SERVER LISTEN */
app.listen(port, function() {
	console.log('server up on:', port);
}); // END listen
