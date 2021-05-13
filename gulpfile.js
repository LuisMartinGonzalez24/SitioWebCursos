const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css (){
    return gulp
        .src('SCSS/app.scss')
        .pipe(autoprefixer({
            overrideBrowserslist : ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass ({
            outputStyle: 'expanded',
        }))
        .pipe(gulp.dest('CSS'));
}

function WatchFiles(){
    gulp.watch('SCSS/*.scss', css);
    gulp.watch('index.html');
}

//Registrar funciones como tareas

gulp.task('css', css);
gulp.task('watch', gulp.parallel(WatchFiles) );