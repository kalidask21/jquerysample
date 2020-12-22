var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    nodemon = require('gulp-nodemon'),
    path = require('path'),
    mocha = require('gulp-spawn-mocha-nyc'),
    log = require('gulplog'),
    runSequence = require('run-sequence'),
    shell = require('gulp-shell'),
    paths = {
        src: ['config/**/*.js', 'controllers/*.js', 'models/*.js', 'routes/*.js', 'services/*.js','utils/*.js','app.js', 'server.js'],
        nonJsSrc: ['lang/*.json', 'package.json'],
        testSrc: ['test/*.js'],
        dest: 'dist',
        sourceRoot: path.join(__dirname, 'dist')
    };

gulp.task('babel', function () {
    return gulp.src(paths.src, {
            base: '.'
        })
        // .pipe(sourcemaps.init())
        .pipe(babel({
            "presets": [
                ["env", {
                    "targets": {
                        "node": "current"
                    }
                }]
            ]
        }))
        // .pipe(sourcemaps.write('.', { sourceRoot: paths.sourceRoot }))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('copy', function () {
    return gulp.src(paths.nonJsSrc)
        .pipe(gulp.dest(paths.dest));
}); 

gulp.task('copyTest', function () {
    return gulp.src(paths.testSrc, {
            base: '.'
        })
        .pipe(gulp.dest(paths.dest));
}); 

gulp.task('nodemon', function () {
    nodemon({
            script: 'server',
            ext: 'js jade sass',
            ignore: ['*.map'],
            tasks: ['babel']
        })
        .on('restart', function () {
            console.log('restarted!');
        })
});

gulp.task('test', function () {
    return gulp.src(paths.sourceRoot + '/test/*.js', {
        read: false
    }).pipe(mocha({
        env: {
            NODE_ENV: 'test'
        },
        reporter: 'spec',
        nyc: {
            "reporter": [
                "text",
                "cobertura",
                "html"
            ],
            "reportDir": paths.sourceRoot + "/test_output/coverage"
        },
        exit: true
    })).on('error', log.error)
});

gulp.task('build', ['babel', 'copy', 'copyTest']);

gulp.task('check', function (callback) {
    runSequence('build', 'test', callback);
});

gulp.task('default', ['check']);