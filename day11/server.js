const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const zlib = require("zlib"); //压缩 

let hotData = require("./data/hot.json");
let comingData = require("./data/coming");
http.createServer((req, res) => {
    let { pathname, query } = url.parse(req.url, true);
    //console.log(pathname, query)
    pathname = pathname === "/" ? "index.html" : pathname;
    //console.log(pathname)
    if (path.extname(pathname)) { //有后缀  加载的静态资源文件
        res.end(fs.readFileSync(path.join(__dirname, "public", pathname)))
    } else { //没有后缀的  ajax发出的接口请求 加载数据库里的数据
        if (pathname === "/tab") { //为了请求tab切换的数据
            if (query.type == "hot") {
                res.end(JSON.stringify(hotData.movieList));
            } else if (query.type == "com") {
                res.end(JSON.stringify(comingData.coming));
            }
            //console.log(query)
        }
    }

}).listen(9090)