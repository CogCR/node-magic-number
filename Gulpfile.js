/*
  Build operations for magic-number.
*/
var gulp = require('gulp'),
      fs = require('fs'),
     tsc = require('gulp-typescript');

gulp.task('default', function() {
  return gulp.src('*.ts')
  .pipe(tsc({
    noImplicitAny: true,
    module: 'commonjs'
  }))
  .pipe(gulp.dest('.'));
});

gulp.task('clean', function() {
  fs.unlinkSync('magic-number.js');
  fs.unlinkSync('magic-number.test.js');
});
