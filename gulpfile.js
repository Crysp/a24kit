const gulp = require('gulp');
const rimraf = require('rimraf');
const ts = require('gulp-typescript');
const merge2 = require('merge2');
const babel = require('gulp-babel');
const tsconfig = require('./tsconfig');

const libDir = 'dist/lib';
const esDir = 'dist/es';

function babelify(js, modules) {
    let stream = js.pipe(babel());
    return stream.pipe(gulp.dest(modules ? libDir : esDir));
}

function compile(modules) {
    rimraf.sync(modules ? libDir : esDir);
    const source = [
        'components/**/*.tsx',
        'components/**/*.ts',
        'typings/**/*.d.ts'
    ];
    const tsResult = gulp.src(source)
        .pipe(ts(tsconfig.compilerOptions));
    const tsFilesStream = babelify(tsResult.js, modules);
    const tsd = tsResult.dts.pipe(gulp.dest(modules ? libDir : esDir));

    return merge2([tsFilesStream, tsd]);
}

gulp.task('compile-es', done => {
    console.log('[Parallel] Compile to es...');
    compile(false).on('finish', done);
});

gulp.task('compile-js', done => {
    console.log('[Parallel] Compile to js...');
    compile().on('finish', done)
});

gulp.task('compile-finalize', done => { done() });

gulp.task('compile', gulp.series(gulp.parallel('compile-es', 'compile-js'), 'compile-finalize'));
