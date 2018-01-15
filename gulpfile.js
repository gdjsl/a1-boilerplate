var gulp = require('gulp'),
browserSync = require('browser-sync').create();


gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: ''
        }
    })
});


gulp.task('watch', ['browserSync'], function () {
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('angular/Shared/Master/*.html', browserSync.reload);
    gulp.watch('assets/css/**/*', browserSync.reload);
    gulp.watch('angular/**/*', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});