const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const zlib = require("zlib"); //压缩 

const server = http.createServer((req, res) => {
    // req  请求体 挂载的所有请求信息
    // res 响应体 挂载所有的响应信息
    if (req.url.includes("/favicon.ico")) {
        return res.end(); //断开和服务器的连接 如果不断开 服务器挂起
    }
    // console.log(req.url)
    // console.log(url.parse(req.url,true))//true 参数 把搜索字符串=》对象
    let { pathname, query } = url.parse(req.url, true);
    console.log(pathname, query);

    pathname = pathname === "/" ? "index.html" : pathname;
    let file = path.join(__dirname, "public", pathname);
    res.end(fs.readFileSync(file))

    // console.log(req.headers["accept-encoding"])
    let acode = req.headers["accept-encoding"]; // gzip, deflate
    if (acode.match(/\bgzip\b/)) { //浏览支持这种格式
        let zip = zlib.createGzip();
        fs.createReadStream(file).pipe(zip).pipe(res)

    } else if (acode.match(/\bdeflate\b/)) { //浏览支持这种格式
        let zip = zlib.createDeflate();
        fs.createReadStream(file).pipe(zip).pipe(res)
        console.log(res)
    }
})

server.listen(8080, () => {
    console.log(server.address().port) //自动获取 端口号
})