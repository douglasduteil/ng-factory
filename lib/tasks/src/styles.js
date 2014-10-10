'use strict';

var reload = require('browser-sync').reload;

module.exports = function(gulp, config) {

  var channels = require('gulp-channels')(gulp, config);

  var src = config.src;
  gulp.task('ng-factory:src/views', function() {
    gulp.src(src.styles, {cwd: src.cwd, base: src.cwd})
      .pipe(channels.styles.src())
      .pipe(reload({stream: true}));
  });

};