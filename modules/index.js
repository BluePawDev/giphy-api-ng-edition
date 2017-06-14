var express = require('express');
var router = express.Router();
var path = require('path');

/* EXAMPLES */


router.get('/', function(req, res) {
	console.log('base url was hit');
	res.sendFile(path.resolve('./public/views/index.html'));
}); // end base url

module.exports = router;
