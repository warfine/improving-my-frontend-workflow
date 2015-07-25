var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('minify-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));
});
