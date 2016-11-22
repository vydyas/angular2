var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var watch = require('gulp-watch');

var rootPath = '';

gulp.task('less', function() {
    gulp.src(rootPath + 'assets/less/master.less')
        .pipe(less({
            paths: [
                path.join(__dirname, 'less', 'includes')
            ]
        }))
        .pipe(gulp.dest(rootPath + 'assets/css'));
});

gulp.task('watch', function () {

    gulp.watch([
        rootPath + 'assets/less/**/*.less'
    ], ['less']);

});