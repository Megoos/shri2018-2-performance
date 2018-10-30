const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');

gulp.task('css', () => {
  return gulp
    .src('styles.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'));
});

gulp.task('js', () => {
  return gulp
    .src('scripts.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['css', 'js']);
