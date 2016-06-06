var gulp = require('gulp'),
    data = require('gulp-data'),
    clean = require('gulp-clean'),
    nunjucksRender = require('gulp-nunjucks-render');

gulp.task('clean-public', function () {
  return gulp.src('app/public/**/*', {read: false})
    .pipe(clean({force: true}));
});

gulp.task('nunjucks', ['clean-public'], function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('app/pages/**/*.+(html)')
    // Adding data to nunjucks
    .pipe(data(function() {
        return require('./app/data.json')
    }))
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['app/templates']
    }))
    // output files in app folder
    .pipe(gulp.dest('app/public'))
});

gulp.task('default', ['nunjucks']);