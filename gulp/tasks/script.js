const gulp = require('gulp')
const plumber = require('gulp-plumber')
const webpack = require('webpack-stream')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")
const eslint = require('gulp-eslint')
const rename = require("gulp-rename")

module.exports = function script() {
  return gulp.src('src/js/main.js')
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/js'))
}