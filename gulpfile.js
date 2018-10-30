const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
var nano = require('gulp-cssnano');

gulp.task('js', () => {
  return gulp
    .src('scripts.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'));
});

gulp.task('css', function () {
  return gulp.src('styles.css')
      .pipe(nano())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('.'));
});

gulp.task('default', ['css', 'js']);
