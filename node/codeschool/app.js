var express = require('express');
var app = express();

app.use(express.static('public')); // Middleware, задающее директорию для статических файлов.

var logger = require('./logger');
app.use(logger);

var blocks = require('./routes/blocks');
app.use('/blocks', blocks);

app.route('/')
	.get(function(req, res) {
		res.sendFile('index.html');
	});

app.get('/whole302', function(req, res) {
	res.redirect('/parts'); // Делает 302 (temporarily) редирект.
});

app.get('/whole301', function(req, res) {
	res.redirect(301, '/parts'); // Делает 301 (permanent) редирект.
});



app.listen(3010, function(){
	console.log('Listening on port 3010');
});