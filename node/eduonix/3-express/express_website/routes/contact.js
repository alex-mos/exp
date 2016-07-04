var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('contact', { title : 'Contact' });
});

router.post('/send', function(req, res, next) {

	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'alexander.mospan@gmail.com',
			pass: 'PASS'
		}
	});

	var mailOptions = {
		from: 'Node Bot',
		to: 'alexander.mospan@gmail.com',
		subject: 'Daily Report',
		text: 'You have read 5 articles today, ' + req.body.name + '. Email: ' + req.body.email + '\n Message: \n' + req.body.message,
		html: '<p>You have read 5 articles today, ' + req.body.name + '.<br>Email: ' + req.body.email + '<br> Message: <br>' + req.body.message + '</p>'
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
			res.redirect('/');
		} else {
			console.log('message sent: ' + info.response);
		}
	})

});

module.exports = router;
