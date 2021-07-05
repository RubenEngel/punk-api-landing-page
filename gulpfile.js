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

gulp.task('sass', async function() {
  gulp.src('./app/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./app'));
})

gulp.watch('./app/sass/*.scss', gulp.series(['sass']));