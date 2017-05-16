var gulp = require('gulp'),
	sass = require('gulp-sass');
	browserSync = require('browser-sync');

	gulp.task('sass', function(){
		return gulp.src('app/sass/main.sass')
		.pipe(sass())
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({stream: true}))
	});
	
	
	gulp.task('browser-sync', function(){
		browserSync({
			server: {
				baseDir: 'dist'
			}
		});
		
	});
	
	gulp.task('watch',['browser-sync', 'sass'], function(){
		gulp.watch('app/sass/*.sass', ['sass']);
		gulp.watch('dist/*.html', browserSync.reload);
	});