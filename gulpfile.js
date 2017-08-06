var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');
var tslint = require('gulp-tslint');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');

//BUILD

gulp.task('build', function (done) {
  runSequence(
    'lint:ts',
    'clean:ts',
    'build:ts',
    done);
})

gulp.task('build:ts', compileTypescript({
  src: './src/**/*.ts',
  sourcemaps: true,
  dest: './dist'
}));

gulp.task('lint:ts', lintTypescript({
  src: './src/**/*.ts',
}))

gulp.task('clean:ts', cleanFiles({
  src: './dist/**/*.*'
}));

//TEST

gulp.task('test', runTests({
  src: './dist/**/*.spec.js'
}));

// TASK DEFINITIONS

var tsProject = ts.createProject('tsconfig.json');

function copyStaticFiles(opts) {
  return function () {
    return gulp.src(opts.src)
      .pipe(gulp.dest(opts.dest));
  }
}

function compileTypescript(opts) {
  return function () {
    return gulp.src(opts.src)
      .pipe(gulpif(opts.sourcemaps, sourcemaps.init()))
      .pipe(tsProject())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(gulpif(opts.sourcemaps, sourcemaps.write("./")))
      .pipe(gulp.dest(opts.dest));
  };
}

function lintTypescript(opts) {
  return function () {
    return gulp.src(opts.src)
      .pipe(tslint({
        configuration: 'tslint.json',
        formatter: 'verbose',
      }))
      .pipe(tslint.report({
        emitError: false,
      }));
  };
}

function cleanFiles(opts) {
  return function () {
    return gulp.src(opts.src)
      .pipe(clean());
  };
}

function runTests(opts) {
  return function () {
    return gulp.src(opts.src, { read: false })
      .pipe(mocha({ reporter: 'list' }))
  }
}