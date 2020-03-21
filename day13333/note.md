# gulp 基于nodejs开发 自动化构建工具  基于管道流 pipe
- 上线之前  打包压缩编译
- sass  =》css3 =》css =》
-js （es6） =>es5 es3

## gulp使用
- 全局安装gulp   npm i gulp -g    目的：为了使用gulp
- 本地安装gulp   npm i gulp -D    目的：为了使用gulp方法或者属性
- 创建一个 文件  gulpfile.js


# gulp常用api
- gulp.task(任务名,cb)  创建一个任务
- gulp.src(源目录路径,cb)  读取源目录
- gulp.dest(目标目录,cb)  拷贝到目标目录
- gulp.watch(监听的路径,执行的任务名)   实时监听

- gulp.series()  串行执行任务  同步执行
- gulp.parallel()  并行执行任务   异步执行