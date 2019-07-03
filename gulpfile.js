

var gulp = require("gulp"),
    iconfont = require('gulp-iconfont');


//This is broken: https://github.com/nfroidure/gulp-iconfont/issues/79 - trying to fix
function iconfont() {
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



exports.iconfont = iconfont

gulp.task('iconFont', iconfont);