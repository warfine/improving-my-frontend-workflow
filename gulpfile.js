var gulp = require('gulp'),
  minifyCss = require('gulp-minify-css'),
  minifyHTML = require('gulp-minify-html'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer-core'),
  gutil = require('gulp-util'),
  ftp = require('gulp-ftp');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('minify-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-html', function() {
  return gulp.src('src/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  var processors = [
    autoprefixer({
      browsers: ['last 1 version']
    })
  ];
  return gulp.src('src/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dest/css'));
});

gulp.task('upload', function () {
    return gulp.src('src/css/*.css')
        .pipe(ftp({
            host: '',
            user: '',
            pass: '',
            remotePath: ''
        }))
        // you need to have some kind of stream after gulp-ftp to make sure it's flushed
        // this can be a gulp plugin, gulp.dest, or any kind of stream
        // here we use a passthrough stream
        .pipe(gutil.noop());
});

gulp.task('watch', function() {
  gulp.watch('src/css/*', ['upload']);
});
