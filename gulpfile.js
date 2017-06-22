var gulp        = require('gulp'),
    less        = require("gulp-less"),
    minifyCss   = require("gulp-minify-css"),
    uglify      = require("gulp-uglify"),
    rename      = require('gulp-rename');

// LESS compile
gulp.task('compile-less', function () {
    gulp.src('less/*.less')
    .pipe(less())
    .pipe(minifyCss())
    .pipe(rename({
    	suffix: '.min'
    }))
    .pipe(gulp.dest('public/css'));
});

// JS compile
gulp.task('compile-js', function () {
    gulp.src('js-dev/*.js')
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('public/js'));
});