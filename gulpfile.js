const gulp = require('gulp');
const server = require('gulp-webserver');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin'); 

async function startServer() {
    gulp.src('app')
      .pipe(server({
        livereload: true,
        open: true,
        port: 3000
      }));
  }

async function buildSass() {
  gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app'));
}

async function watchSass() {
  gulp.watch('./app/sass/*.scss', buildSass);
}

async function minifyJS() {
  gulp.src('app/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
};

async function minifyCSS() {
  buildSass();
  gulp.src('app/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
};

async function minifyHTML() {
  gulp.src('app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/html'));
};

exports.server = gulp.series(
  startServer,
  watchSass
  )
exports.build = gulp.parallel(
  minifyJS,
  minifyCSS,
  minifyHTML
)