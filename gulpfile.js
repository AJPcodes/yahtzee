// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lintServer', function () {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['**/*.js','!node_modules/**', '!client/**', '!dist/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint({
        extends: ['eslint:recommended'],
        parserOptions: {
          "ecmaVersion": 6,
          "sourceType": "module"
          },
        ecmaFeatures: {
            'modules': true
          },

        rules: {
            'strict': 1,
            'no-console': 1
          },
        globals: {
            'jQuery':true,
            '$':true
         },
        env: {
        "node": true
          }

    }))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

// Lint Task
gulp.task('lintClient', function () {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['./client/**/*.js', '!./client/scripts/dist/**','!./client/vender/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint({
        extends: ['eslint:recommended',"angular"],
        parserOptions: {
          "ecmaVersion": 6,
          "sourceType": "module"
          },
        ecmaFeatures: {
            'modules': true
          },

        rules: {
            'strict': 1,
            'no-console': 1
          },
        globals: {
            'jQuery':true,
            '$':true
         },
        env: {
        "browser": true
          }

    }))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});


// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./client/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['./client/scripts/app.js', './client/scripts/controllers/*.js', './client/scripts/services/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./client/scripts/dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['./client/**/*.js', '!./client/scripts/dist/**','!./client/vender/**'], ['lintClient', 'scripts']);
    gulp.watch(['**/*.js','!node_modules/**', '!client/**', '!dist/**'], ['lintServer']);
    gulp.watch('./sass/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lintServer', 'lintClient', 'sass', 'scripts', 'watch']);