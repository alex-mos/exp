var gulp = require('gulp'),
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
	browserSync = require('browser-sync'),
	del = require('del');

gulp.task('jshint', function() {
	gulp.src('app/scripts/**/*.js')
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
	gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
		.pipe(gulp.dest('./dist/fonts'));
	gulp.src('./bower_components/bootstrap/dist/fonts/**/*.{ttf,woff,eof,svg}*')
		.pipe(gulp.dest('./dist/fonts'));
});

gulp.task('clean', function() {
	return del(['dist']);
});

gulp.task('usemin', ['jshint'], function() {
	return gulp.src('app/menu.html')
		.pipe(usemin({
			css: [minifycss(), rev()],
			js: [uglify(), rev()]
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['browser-sync'], function() {
	// Watch .js files
	gulp.watch('{app/scripts/**/*.js,app/styles/**/*.css,app/**/*.html}', ['usemin']);
	// Watch image files
	gulp.watch('app/images/**/*', ['imagemin']);
});

gulp.task('browser-sync', ['default'], function() {
	var files = [
		'app/**/*.html',
		'app/styles/**/*.css',
		'app/scripts/**/*.js',
		'app/images/**/*',
		'dist/**/*'
	];

	browserSync.init(files, {
		server: {
			baseDir: 'dist',
			index: 'menu.html'
		}
	});

	// Watch any files in dist/, reload on change
	gulp.watch(['dist/**']).on('change', browserSync.reload)
});

gulp.task('default', ['clean'],function() {
	gulp.start('usemin', 'imagemin', 'copyfonts');
});