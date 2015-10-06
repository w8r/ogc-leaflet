var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var serve = require('gulp-serve');
var gutil = require("gulp-util");
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

var dependencies = ['leaflet'];
var scriptsCount = 0;

// Private Functions
// ----------------------------------------------------------------------------
function bundleApp(watch) {
  scriptsCount++;
  // Browserify will bundle all our js files together in to one and will let
  // us use modules in the front end.
  var appBundler = browserify({
      entries: 'index.js',
      'ignore-missing': true,
      standalone: 'ogc',
      debug: true
  });

  if (watch){
    // make the dependencies external so they dont get bundled by the
    // app bundler. Dependencies are already bundled in vendor.js for
    // development environments.
    dependencies.forEach(function(dep){
      appBundler.external(dep);
    });
  }

  appBundler
      // transform ES6 and JSX to ES5 with babelify
      .transform(babel.configure({
        optional: ['runtime']
       }))
      .bundle()
      .on('error', gutil.log)
      .on('log', function(msg) {
        gutil.log(
          gutil.colors.green('build:'),
          gutil.colors.white(msg)
        );
      })
      .pipe(source('ogc-leaflet-src.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({
        loadMaps: true
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist'));
}

function compile(watch) {
  var browserified = browserify('./index.js', {
      require: dependencies,
      debug: true,
      standalone: 'ogc',
      'ignore-missing': true
    })
    .transform(
      babel.configure({
        optional: ['runtime']
      })
    );

  if (watch) {
    dependencies.forEach(function(dep) {
      browserified.external(dep);
    });
  }

  var bundler = watchify(browserified);

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

gulp.task('scripts', function() {
  bundleApp(true);
});

gulp.task('watch', function() {
  watch();
});

gulp.task('serve', serve({
  root: ['.'],
  port: 3000
}));

gulp.task('default', ['watch', 'serve']);
