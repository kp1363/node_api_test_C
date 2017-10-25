var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.route('/login/:id').get(function(req, res){
	console.log('login api called');
	console.log('id='+req.params.id);
	var fsData = JSON.parse(fs.readFileSync('./public/data.json'));
	res.json(fsData);
});




module.exports = router;
