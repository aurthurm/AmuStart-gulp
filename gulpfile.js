const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('hello', function() {
  console.log('Hello, I\'m AmuStarter!');
});

//Task for sass
gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});