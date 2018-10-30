const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const nano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');

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


gulp.task('html', () => {
  gulp
    .src('indexSrc.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(rename({basename: "index"}))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['css', 'js']);
