var fs = require('fs');
var archiver = require('archiver');
var path = require('path');

function getDirectories(srcpath) {
	return fs.readdirSync(srcpath).filter(function(file) {
		return fs.statSync(path.join(srcpath, file)).isDirectory();
	});
}

var dirs = getDirectories(__dirname);

var index = dirs.indexOf('node_modules');
dirs.splice(index, 1);

dirs.forEach(function(element, index, array){
	var output = fs.createWriteStream(element + '.zip');
	var archive = archiver('zip');

	output.on('close', function () {
		console.log(archive.pointer() + ' total bytes');
		console.log('archiver has been finalized and the output file descriptor has closed.');
	});

	archive.on('error', function(err){
		throw err;
	});

	archive.pipe(output);

	archive.bulk([
		{ expand: true, cwd: element, src: ['**'], dest: element}
	]);
	archive.finalize();
});