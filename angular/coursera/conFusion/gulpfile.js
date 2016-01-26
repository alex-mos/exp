var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	minifycss = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	uglify = require('gulp-uglify'),
	usemin = require('gulp-usemin'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	changed = require('gulp-changed'),
	rev = require('gulp-rev'),
	ngannotate = require('gulp-ng-annotate'),
	browserSync = require('browser-sync'),
	del = require('del');

gulp.task('jshint', function() {
	gulp.src('app/scripts/**/*.js')
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task('imagemin', function() {
	gulp.src('app/images/**/*').
		pipe(imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('dist/images'));
});

gulp.task('copyfonts', ['clean'], function() {
	gulp.src('app/bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
		.pipe(gulp.dest('./dist/fonts'));
	gulp.src('app/bower_components/bootstrap/dist/fonts/**/*.{ttf,woff,eof,svg}*')
		.pipe(gulp.dest('./dist/fonts'));
});

gulp.task('clean', function() {
	return del(['dist']);
});

gulp.task('usemin', ['jshint'], function() {
	return gulp.src(['app/*.html'])
		.pipe(plumber())
		.pipe(usemin({
			css: [minifycss, rev],
			js: [ngannotate, uglify, rev]
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('browser-sync', function() {
	//var files = [
	//	'app/**/*.html',
	//	'app/styles/**/*.css',
	//	'app/scripts/**/*.js',
	//	'app/images/**/*'
	//];

	browserSync.init({
		server: {
			baseDir: './app',
			index: 'menu.html'
		}
	});

	// Watch any files in app/, reload on change
	gulp.watch(['app/**']).on('change', browserSync.reload)
});

gulp.task('build', ['clean'],function() {
	gulp.start('usemin', 'imagemin', 'copyfonts');
});

//gulp.task('watch', ['browser-sync'], function() {
//	// Watch .js files
//	gulp.watch(['app/scripts/**/*.js', 'app/styles/**/*.css', 'app/**/*.html'], ['usemin'], function(){
//		console.log('app files changed');
//	});
//	// Watch image files
//	gulp.watch('app/images/**/*', ['imagemin']);
//});