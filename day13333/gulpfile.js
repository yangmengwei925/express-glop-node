const gulp = require("gulp");
const sass = require("gulp-sass"); //编译sass
const autoprefixer = require("gulp-autoprefixer"); //添加浏览器内核
const css = require("gulp-clean-css"); //压缩 css
const concat = require("gulp-concat"); //合并 css/js/html
const  babel = require("gulp-babel");//编译es6 - es5或者更低版本
const  uglify = require("gulp-uglify");//js压缩
const  htmlmin = require("gulp-htmlmin");//压缩 html

const webserver = require("gulp-webserver");

// sass  编译css  添加浏览器内核  压缩   合并
// 开发环境 边开发 边查看效果  dev  编译
//生产环境 default 上线之前那一刻 打包压缩合并 dist

//开发环境的编译
gulp.task("devSass",()=>{
    return gulp.src("./public/scss/*.scss")
    .pipe(sass())  //编译css
    .pipe(gulp.dest("./public/css"))
})
gulp.task("devJs",()=>{
    // return gulp.src("./public/js/**")
    return gulp.src("./public/js/*.js")
    .pipe(babel({  //编译js
        presets:["@babel/env"]
    }))
    .pipe(gulp.dest("./public/js1"))
})
//实时监听
gulp.task("watch",()=>{
    gulp.watch("public/scss/*.scss",gulp.series("devSass"))
    gulp.watch("public/js/*.js",gulp.series("devJs"))
})

//开发环境 合并任务到dev
// gulp.task("dev",gulp.series("devJs","devSass","watch"))
gulp.task("dev",gulp.parallel("watch","devJs","devSass"))

//生产环境的 编译 压缩  合并
gulp.task("bsass",()=>{
    return gulp.src("./public/scss/*.scss")
    .pipe(sass())  //编译css
    .pipe(autoprefixer({  //添加内核
        browsers:["last 2 versions"]
    }))
    .pipe(concat("all.css")) //合并
    .pipe(css()) //压缩
    .pipe(gulp.dest("./dist/css"))
   
})
gulp.task("bjs",()=>{
    // return gulp.src("./public/js/**")
    return gulp.src("./public/js/*.js")
    .pipe(babel({  //编译js
        presets:["@babel/env"]
    }))
    .pipe(uglify())
    .pipe(concat("all.js"))
    .pipe(gulp.dest("./dist/js"))
})
gulp.task("bhtml",()=>{
    return gulp.src("public/*.html")
    .pipe(htmlmin())
    .pipe(gulp.dest("./dist"))
})
gulp.task("copy",()=>{
    return gulp.src("public/js/libs/**")
    .pipe(gulp.dest("./dist/js/libs"))
})

// 生产环境 合并任务到default 默认任务  直接通过 gulp执行
gulp.task("default",gulp.parallel("bsass","bjs","bhtml","copy"))




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