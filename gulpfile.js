var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    notify =  require('gulp-notify'),
    runSquence = require('run-sequence');

gulp.task('sass', function(){
    return gulp.src('./sass/main.scss',{style:'expanded'})
    .on('error', function(){
        console.error
    })
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(notify({message:'SAAS task finished'}));
});

gulp.task('watch', ['sass'], function(){
    notify({message:'sass changed,reloading file...'});
    // gulp.watch('./sass/*.scss',['sass']);
    browserSync.reload();
});

gulp.task('server',function(){

    browserSync.init({
        server:{
            baseDir:'./'
        }
    });

    // gulp.task('default', ['sass','watch']);
    gulp.watch('./sass/**/*.scss',['watch']);
    gulp.watch('./**/*.html',browserSync.reload);
    
});



