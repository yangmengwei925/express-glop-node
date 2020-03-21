const gulp = require("gulp");
const sass = require("gulp-sass"); //编译sass
const autoprefixer = require("gulp-autoprefixer"); //添加浏览器内核
const css = require("gulp-clean-css"); //压缩 css
const concat = require("gulp-concat"); //合并 css/js/html
const  babel = require("gulp-babel");//编译es6 - es5或者更低版本
const  uglify = require("gulp-uglify");//js压缩

const webserver = require("gulp-webserver");

// sass  编译css  添加浏览器内核  压缩   合并
// sass 编译 压缩 合并  
gulp.task("sass",()=>{
    return gulp.src("./public/scss/*.scss")
    .pipe(sass())  //编译css
    .pipe(autoprefixer({  //添加内核
        browsers:["last 2 versions"]
    }))
    .pipe(concat("all.css")) //合并
    .pipe(css()) //压缩
    .pipe(gulp.dest("./public/css"))
})

// js  编译css    压缩   合并
gulp.task("js",()=>{
    // return gulp.src("./public/js/**")
    return gulp.src("./public/js/*.js")
    .pipe(babel({  //编译js
        presets:["@babel/env"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest("./public/js1"))
})






// html     压缩   合并


//创建任务
gulp.task("ser",()=>{
    return gulp.src("public")
    .pipe(webserver({
        port:9090,  //端口号
        open:true,  
        livereload:true,  //热替换
        fallback:"maoyan.html", //入口文件

    }))
})