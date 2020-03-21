const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
let userData = require("./data/data")

const server = http.createServer((req, res) => {
    let { pathname, query } = url.parse(req.url, true);
    pathname = pathname === "/" ? "register.html" : pathname;
    let filepath = path.join(__dirname, "public", pathname);
    if (path.extname(pathname)) { //加载的静态资源
        if (fs.existsSync(filepath)) {
            res.end(fs.readFileSync(filepath))
        } else {
            res.end(fs.readFileSync(path.join(__dirname, "public/404.html")))
            // res.writeHead("404",{
            //     "content-type":"text/plain;charset=utf-8"
            // })
            // // res.setHeader("content-type","text/plain;charset=utf-8")
            // res.end("404 哟 你访问的页面 走丢了")
        }

    } else {//加载的是接口文件
        switch (pathname) {
            case "/user/register":{
                let data = "";
                req.on("data",chunk=>{
                    data+=chunk;
                })
                req.on("end",()=>{
                    console.log(data)
                    data = JSON.parse(data);//存放 是 前端用户名 密码
                    //首先拿前端传递的data  额和数据库利的user比较
                    let flag = userData.some(item=>item.user==data.user);
                    if(flag){
                        res.end(JSON.stringify({code:1,msg:"注册失败  用户名已经存在"}))
                    }else{
                        userData.push(data);
                        console.log(userData)
                        fs.writeFileSync("./data/data.json",JSON.stringify(userData))
                        res.end(JSON.stringify({code:0,msg:"注册成功"}))

                    }

                })
                break;
            }
            default:
                res.end("你访问的资源不存在")

        }
    }
    })
server.listen(8080, () => {
    console.log(server.address().port)
})