const gulp = require('gulp')
const svgstore = require('gulp-svgstore')
const svgmin = require('gulp-svgmin')
const rename = require('gulp-rename')

module.exports = function svgSprite() {
  return gulp.src('src/img/sprite/*.svg')
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(svgmin())
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'))
}