var express = require('express');
var router = express.Router();

var User = require('../models/user');

var multer = require('multer');
var upload = multer({dest: '../uploads'});



/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});



router.get('/register', function (req, res, next) {
	res.render('register', {
		title: 'Register'
	})
});



router.post('/register', upload.fields([{ name: 'profileimage', maxCount: 1 }]), function(req, res, next) {
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	// Check for image field

	if (req.files.profileimage) {
		console.log('Uploading files...');

		var profileImageOriginalName = req.files.profileimage[0].originalname;
		var profileImageName = req.files.profileimage[0].filename;
		var profileImageMime = req.files.profileimage[0].mimetype;
		var profileImagePath = req.files.profileimage[0].path;
		var profileImageExt  = req.files.profileimage[0].extension;
		var profileImageSize = req.files.profileimage[0].size;
	} else {
		// Set a default image
		var profileImageName = 'noimage.png';
	}

	// Form validation
	req.checkBody('name', 'Назовите своё имя').notEmpty();
	req.checkBody('email', 'Куда писать емейлы?').notEmpty();
	req.checkBody('email', 'Не похоже на адрес').isEmail();
	req.checkBody('username', 'Не похоже на адрес').notEmpty();
	req.checkBody('password', 'Без пароля вам не пройти').notEmpty();
	req.checkBody('password2', 'Вы ошиблись в своём пароле').equals(req.body.password);

	var errors = req.validationErrors();

	if (errors) {
		res.render('register', {
			errors: errors,
			name: name,
			email: email,
			username: username,
			password: password,
			password2: password2
		});
	} else {
		var newUser = new User({
			name: name,
			email: email,
			username: username,
			password: password,
			profileImage: profileImageName
		});

		// Create User
		User.createUser(newUser, function (err, user) {
			if (err) throw err;
			console.log(user);
		});

		// Success message
		//res.flash('success', 'Вы зарегестрированы, и можете войти');

		res.location('/');
		res.redirect('/');
	}

});

router.get('/login', function (req, res, next) {
	res.render('login', {
		title: 'Log In'
	})
});

router.get('/logout', function (req, res, next) {
	res.send('logout')
});

module.exports = router;
