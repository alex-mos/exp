const fs = require('fs');

fs.access(`${process.cwd()}/text.txt`, fs.R_OK | fs.W_OK, function(err) {
	console.log(err);
});
