const gulp = require('gulp')
const csso = require('gulp-csso'),
const uglifyJS = require('gulp-uglify')


gulp.task('css', () => {
  return gulp.src('styles.css')
    .pipe(csso())
    .pipe(gulp.dest('./styles/'));
});

gulp.task('js', () => {
  return gulp.src('scripts.js')
    .pipe(uglifyJS())
    .pipe(gulp.dest('./scripts/'));
});


gulp.task('default', ['css', 'js']);