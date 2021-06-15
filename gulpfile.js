'use strict';
const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const svgSprite = require('gulp-svg-sprite');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');




const html = () => {
    return src(['./src/html/*.html'])
        .pipe(fileInclude())
        .pipe(dest('./dist'))
        .pipe(browserSync.stream())
}


const css = () => {
    return src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./dist'))
        .pipe(browserSync.stream());
}


const svgSprites = () => {
    return src('./src/img/svg/**.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                },
            }
        }))
        .pipe(dest('./dist/img'))
}


const js = () => {
    return src('./src/js/script.js')
        .pipe(fileInclude())
        .pipe(sourcemaps.init())
        .pipe(rename('script.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./dist'))
        .pipe(browserSync.stream());
}


const images = () => {
    return src(['./src/img/**/*.{jpg,png,svg,ico,gif,webp,mp4}'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optomizationLevel: 2
        }))
        .pipe(dest('./dist/img'))
}

const resources = () => {
    return src('./src/resources/**')
        .pipe(dest('./dist/resources'))
}


const fonts = () => {
    return src('src/fonts/*.{woff,woff2}')
        .pipe(dest('./dist/fonts/'))
}


const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    //watch('./src/index.html', html);
    watch('./src/html/**/*.html', html);
    watch('./src/scss/**/*.scss', css);
    watch('./src/resources/**', resources);
    watch('./src/js/**.js', js);
    watch('./src/fonts/*.{woff,woff2}', fonts);
    watch('./src/img/**.svg', svgSprites);
    // watch('./src/img/**/*.{jpg,png,svg,ico,gif,webp}', images);

}

const clean = () => {
    return del(['dist/*'])
}

exports.css = css;
exports.watchFiles = watchFiles;
exports.fileinclude = html;

exports.default = series(clean, parallel(html, js, fonts, images, resources, svgSprites), css, watchFiles);

const cssBuild = () => {
    return src('./src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer({
            cascade: false,
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(dest('./dist'))
}


const jsBuild = () => {
    return src('./src/js/*.js')
        .pipe(fileInclude())
        .pipe(rename('script.min.js'))
        .pipe(uglify())
        .pipe(dest('./dist'))
}

const htmlBuild = () => {
    return src(['./src/html/*.html'])
        .pipe(fileInclude())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('./dist'))
}


exports.build = series(clean, parallel(htmlBuild, jsBuild, fonts, resources, images, svgSprites), cssBuild);

