const gulp = require('gulp')
const webp = require('gulp-webp')

module.exports = function imageWebp() {
  return gulp.src('src/img/*.{png,jpg}')
    .pipe(webp())
    .pipe(gulp.dest('build/img'))
}
