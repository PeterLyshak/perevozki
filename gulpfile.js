// Load Gulp
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plugins = require('gulp-load-plugins')({
        rename: {
            'gulp-live-server': 'serve'
        }
    }),
	browserSync = require('browser-sync'),
	del = require('del');


module.exports = function() {
    return gulp.src('css/*.css')
		   .pipe(minifyCss())
		   .pipe(gulp.dest('assets'));
 };

// Start Watching: Run "gulp"
gulp.task('default', ['watch']);

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: 'assets' // Директория для сервера - assets
		},
		notify: false // Отключаем уведомления
	});
});

// Minify jQuery Plugins: Run manually with: "gulp squish-jquery"
gulp.task('squish-jquery', function () {
    return gulp.src('assets/js/libs/**/*.js')
        .pipe(plugins.uglify({
            output: {
                'ascii_only': true
            }
        }))
        .pipe(plugins.concat('plugins.min.js'))
        .pipe(gulp.dest('assets/js'))
		.pipe(browserSync.reload({stream: true}));
});

// Minify Custom JS: Run manually with: "gulp build-js"
gulp.task('build-js', function () {
    return gulp.src('assets/js/script.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.uglify({
            output: {
                'ascii_only': true
            }
        }))
        .pipe(plugins.concat('scripts.min.js'))
        .pipe(gulp.dest('assets/js'))
		.pipe(browserSync.reload({stream: true}));
});

// Less to CSS: Run manually with: "gulp build-css"
gulp.task('build-css', function () {
    return gulp.src('assets/less/main.less')
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        })
        .pipe(plugins.autoprefixer({
            browsers: [
                    '> 1%',
                    'last 2 versions',
                    'firefox >= 4',
                    'safari 7',
                    'safari 8',
                    'IE 8',
                    'IE 9',
                    'IE 10',
                    'IE 11'
                ],
            cascade: false
        }))
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('assets/css'))
		.pipe(browserSync.reload({stream: true}))
		.on('error', gutil.log);
});

gulp.task('reload-html', function () {
    browserSync.reload();
});

// Default task
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('assets/js/libs/**/*.js', ['squish-jquery']);
	gulp.watch('assets/*.html', ['reload-html']);
    gulp.watch('assets/js/*.js', ['build-js']);
    gulp.watch('assets/less/**/*.less', ['build-css']);
});

gulp.task('clean', function() {
	return del.sync('build');
});

gulp.task('build', ['clean', 'build-js', 'build-css', 'squish-jquery'], function() {

	var buildCss = gulp.src([ // Переносим библиотеки в продакшен
		'assets/css/main.css'
		])
	.pipe(gulp.dest('dist/css'))
	
	var buildImages = gulp.src([ // Переносим библиотеки в продакшен
		'assets/img/**/*'
		])
	.pipe(gulp.dest('dist/img'))

	var buildFonts = gulp.src('assets/fonts/**/*') // Переносим шрифты в продакшен
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('assets/js/*.js') // Переносим скрипты в продакшен
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('assets/*') // Переносим HTML в продакшен
	.pipe(gulp.dest('dist'));


});



// Folder "/" serving at http://localhost:8888
// Should use Livereload (http://livereload.com/extensions/)
gulp.task('serve', function () {
    var server = plugins.serve.static('/', 8888);
    server.start();
    gulp.watch(['build/*'], function (file) {
        server.notify.apply(server, [file]);
    });
});
