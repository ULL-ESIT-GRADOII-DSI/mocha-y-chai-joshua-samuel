var gulp = require('gulp');
var del = require('del');
var minify = require('gulp-minifier');


var DEST = 'minified';
gulp.task('minify', function() {
  return gulp.src(['*.html', 'assets/js/*.js', 'assets/css/*.css'])
    .pipe(minify({
      collapseWhitespace: true,
      minify: true,
      minifyJS: true,
      minifyCSS: true
  })).pipe(gulp.dest(DEST));
});


gulp.task('clean', function(cb) {
  del([
    'minified/*',
  ], cb);
});