const gulp = require('gulp');
const server = require('gulp-webserver');
const sass = require('gulp-sass')(require('sass'));

gulp.task('server', function() {
    gulp.src('app')
      .pipe(server({
        livereload: true,
        open: true,
        port: 3000
      }));
  });

  function buildStyles() {
    return gulp.src('./app/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./app'));
  };
  
  exports.buildStyles = buildStyles;
  exports.watch = function () {
    gulp.watch('./app/sass/**/*.scss', ['sass']);
  };
