const gulp = require('gulp');
const server = require('gulp-webserver');

gulp.task('server', function() {
    gulp.src('app')
      .pipe(server({
        livereload: true,
        open: true,
        port: 3000
      }));
  });

