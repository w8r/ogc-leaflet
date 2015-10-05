var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var serve = require('gulp-serve');
var gutil = require("gulp-util");

function compile(watch) {
  var bundler = watchify(browserify('./index.js', {
    debug: true,
  })
  .exclude('leaflet')
  .transform(babel.configure({
    optional: ['runtime']
  })));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) {
        gutil.log(
          gutil.colors.red('Watchify:'),
          gutil.colors.white(err)
        );
        this.emit('end');
      })
      .pipe(source('ogc-leaflet-src.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({
        loadMaps: true
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist'));
  }

  if (watch) {
    bundler
      .on('update', function() {
        rebundle();
      })
      .on('log', function(msg) {
        gutil.log(
          gutil.colors.green('Watchify:'),
          gutil.colors.white(msg)
        );
      });
  }

  rebundle();
}

function watch() {
  return compile(true);
}

gulp.task('build', function() {
  return compile();
});

gulp.task('watch', function() {
  return watch();
});

gulp.task('serve', serve({
  root: ['.'],
  port: 3000
}));

gulp.task('default', ['watch', 'serve']);
