/*global -$ */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('html', function () {
   gulp.src('public/*.html')
      .pipe(gulp.dest('dist'));
   gulp.src('public/view/*.html')
      .pipe(gulp.dest('dist/view'));
});

gulp.task('css', function () {
   gulp.src('public/css/*.css')
      .pipe(gulp.dest('dist/css'));
   gulp.src('public/font/**/*')
      .pipe(gulp.dest('dist/font'));
});

gulp.task('images', function () {
   gulp.src('public/images/*.*')
      .pipe($.cache($.imagemin({
         progressive: true,
         interlaced: true
      })))
      .pipe(gulp.dest('dist/images'));
});

gulp.task('js', function () {
   gulp.src('public/js/**/*').pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', function () {
   gulp.src(require('main-bower-files')().concat(['bower_components/bootstrap/fonts/**/*']))
      .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2,otf}'))
      .pipe($.flatten())
      .pipe(gulp.dest('dist/fonts'));
});

// 将bower的库文件对应到指定位置
gulp.task('bowerFiles', function () {
   //js
   gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
      .pipe(gulp.dest('dist/js/bootstrap'));
   gulp.src('./bower_components/jquery/dist/jquery.min.js')
      .pipe(gulp.dest('dist/js/jquery'));
   gulp.src('./bower_components/angular/angular.min.js')
      .pipe(gulp.dest('dist/js/angular'));
   //css
   // gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
   //    .pipe(gulp.dest('dist/css/bootstrap'));
});

//代码检测
gulp.task('jshint', function () {
   gulp.src('public/js/**/*.js')
      .pipe(reload({stream: true, once: true}))
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'))
      .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

gulp.task('csslint', function () {
   gulp.src('public/css/*.css')
      .pipe($.csslint())
      .pipe($.csslint.formatter());
});

//quint、connect 单元测试
gulp.task('qunit', function () {
   gulp.src('public/index.html')
      .pipe($.qunit());
});


gulp.task('default', function () {
   gulp.run(
      // 'jshint',
      // 'csslint',
      // 'qunit',
      'html',
      'css',
      'images',
      'js',
      'bowerFiles',
      'fonts'
   );
   gulp.watch('public/*.html', ['html']);
   gulp.watch('public/css/*.css', ['css']);
   gulp.watch('public/images/*.*', ['images']);
   gulp.watch('public/js/**/*', ['js']);
});