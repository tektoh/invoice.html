var gulp = require('gulp')
var pug = require('gulp-pug')
var postcss = require('gulp-postcss')
var inlineCss = require('gulp-inline-css')
var html2pdf = require('gulp-html2pdf')

gulp.task('css', function () {
  return gulp
  .src('./src/stylesheets/*.css')
  .pipe(postcss())
  .pipe(gulp.dest('./dest/css/'))
})

gulp.task('html', ['css'], function () {
  return gulp
  .src('./src/templates/*.pug')
  .pipe(pug({
    pretty: true
  }))
  //.pipe(inlineCss())
  .pipe(gulp.dest('./dest/html/'))
})

gulp.task('pdf', ['html'], function () {
  return gulp
  .src('./dest/html/*.html')
  .pipe(html2pdf())
  .pipe(gulp.dest('./dest/pdf/'))
})

gulp.task('default', ['css', 'html', 'pdf'])
