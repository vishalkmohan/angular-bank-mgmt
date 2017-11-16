var gulp = require('gulp');
var war = require('gulp-war/index');
var zip = require('gulp-zip');

gulp.task('war', function () {
    gulp.src(["dist/*.js", "dist/*.css", "dist/index.html","dist/assets/bank/*"],{base: './dist'})
        .pipe(war({
            welcome: 'index.html',
            displayName: 'bankApp',
        }))
        .pipe(zip('bankApp.war'))
        .pipe(gulp.dest("./warFolder"));
 
});