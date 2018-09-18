// create on object Gulp

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const gulpUglify = require('gulp-uglify');
const gulpSass = require('gulp-sass');
const concat = require('gulp-concat');
/*
    **** MAIN FUNCTIONS ***
    gulp.task - define tasks.
    gulp.src -- Point to files  to uses
    gulp.dest -- Point to folder to output
    gulp.watch -- watch files   and folders for changes.
 */

// log Messages

gulp.task('message', function () {
   return console.log('Gulp is running... ');
});

// copy All html files
gulp.task('copyHtml', function () {
   gulp.src('src/*.html')
       .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
    return console.log('Gulp is running... ');
});

//  Optimize Images
gulp.task('imageMin', function () {
   gulp.src('src/images/*')
       .pipe(imagemin())
       .pipe(gulp.dest('dist/images'));
});

// Minify JS
gulp.task('minify', function () {
   gulp.src('src/js/*.js')
       .pipe(gulpUglify())
       .pipe(gulp.dest('dist/js'));
});

// Compile Sass
gulp.task('sass', function () {
    gulp.src('src/sass/*.scss')
        .pipe(gulpSass().on('Error', gulpSass.logError))
        .pipe(gulp.dest('dist/css'));
});
// Scripts
gulp.task('scripts', function () {
   gulp.src('src/js/*.js')
       .pipe(concat('main.js'))
       .pipe(gulp.dest('dist/js'))
});
// Optimize real time

gulp.task('watch', function () {
   gulp.watch('src/js/*.js', ['scripts']);
   gulp.watch('src/images/*', ['imageMin']);
   gulp.watch('src/sass/*.scss', ['sass']);
   gulp.watch('src/*.html', ['copyHtml']);
});

gulp.task('default', ['message', 'copyHtml', 'imageMin', 'minify', 'sass']);