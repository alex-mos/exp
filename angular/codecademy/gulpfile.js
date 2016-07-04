var gulp = require('gulp');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');


// Less processing

gulp.task('less', function () {
    return gulp.src('./less/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['> 1%'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream: true}));
});


// Static server

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});


// Reload all browsers

gulp.task('bs-reload', function () {
    browserSync.reload();
});


// Task for `gulp` command

gulp.task('default',['less', 'browser-sync'], function() {
    gulp.watch('./less/*.less', ['less']);
    gulp.watch('*.html', ['bs-reload']);
    gulp.watch('./js/*.js', ['bs-reload']);
});