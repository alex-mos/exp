var express = require('express');
var router = express.Router();



var ensureAuthenticated = function(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/users/login');
};



/* Members page. */
router.get('/', ensureAuthenticated, function (req, res, next) {
	res.render('index', {
		title: 'Members'
	});
});



module.exports = router;
