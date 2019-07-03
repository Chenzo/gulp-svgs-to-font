

var gulp = require("gulp"),
    iconfont = require('gulp-iconfont'),
    runTimestamp = Math.round(Date.now()/1000);

//This is broken: https://github.com/nfroidure/gulp-iconfont/issues/79 - trying to fix
function iconfontnew() {
    return gulp
        .src(['.svgs/*.svg'])
        .pipe(iconfont({
            fontName: 'icons',
            prependUnicode: true,
            formats: ['ttf', 'eot', 'woff', 'woff2'],
            normalize: true,
            fontHeight: 1001
        }))
        .pipe(gulp.dest('./fonts/'));
}

gulp.task('Iconfont', function(){
    return gulp.src(['./svgs/*.svg'])
      .pipe(iconfont({
        fontName: 'myfont', // required
        prependUnicode: true, // recommended option
        formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available
        timestamp: runTimestamp, // recommended to get consistent builds when watching files
      }))
        .on('glyphs', function(glyphs, options) {
          // CSS templating, e.g.
          console.log(glyphs, options);
        })
      .pipe(gulp.dest('./fonts/'));
  });

exports.iconfontnew = iconfont

gulp.task('iconFontNew', iconfontnew);