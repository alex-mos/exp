var express = require('express');
var router = express.Router();

var User = require('../models/user');

var multer = require('multer');
var upload = multer({dest: '../uploads'});

var flash = require('connect-flash');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');


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
		req.flash('alert alert-success', 'Вы зарегистрированы, и можете войти');

		res.location('/');
		res.redirect('/');
	}

});



router.get('/login', function (req, res, next) {
	res.render('login', {
		title: 'Log In'
	})
});



passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.getUserById(id, function(err, user) {
		done(err, user);
	});
});

passport.use(new LocalStrategy(
	function(username, password, done) {
		User.getUserByUsername(username, function(err, user) {
			if (err) throw err;

			if (!user) {
				console.log('Unknown user');
				return done(null, false, {message: 'Unknown user'});
			} else {
				User.comparePassword(password, user.password, function(err, isMatch) {
					if (err) throw err;

					if(isMatch) {
						return done(null, user);
					} else {
						console.log('Invalid password');
						return done(null, false, {message: 'Invalid Password'});
					}
				});
			}
		})
	}
));

router.post(
	'/login',
	passport.authenticate('local', {
		failureRedirect: '/users/login',
		failureFlash: 'Invalid username or password'
	}),
	function(req, res) {
		console.log('*** Autentification success ***');
		req.flash('alert alert-success', 'You are logged in.');
		res.redirect('/');
	}
);



router.get('/logout', function (req, res) {
	req.logout;
	req.flash('alert alert-success', 'You have logged out.');
	res.redirect('/users/login');
});



module.exports = router;
