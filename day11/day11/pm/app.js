const fs = require("fs");
const path = require("path");
const url = require("url");
const http = require("http");
const zlib = require("zlib");
const querystring = require("querystring"); //解析post请求的数据
let userData = require("./data/user")

http.createServer((req,res)=>{//中间件 客户端向服务端发出请求的额时候 触发
    let {pathname,query} = url.parse(req.url,true);
    req.query = query;  // 挂载到req.query上  获取get请求的数据

    pathname=pathname==="/"?"form.html":pathname;
    if(path.extname(pathname)){//有后缀 加载静态资源文件 public
        res.end(fs.readFileSync(path.join(__dirname,"public",pathname)))
    }else{
        //get请求
            if(pathname==="/login"){//前台发出的接口的目的？为了验证携带的数据 是否哎数据库中
                let flag = userData.some(item=>item.user==req.query.user&&item.pwd==req.query.pwd)
                if(flag){//数据库存在这一项
                    res.end(JSON.stringify({code:0,msg:"登录成功"}))
                }else{//数据库 bu存在这一项
                    res.end(JSON.stringify({code:1,msg:"登录失败"}))
                }
            }
         //post 请求传递的数据 都挂在到 req.body
            if(pathname==="/loginPost"){//前台发出的接口的目的？为了验证携带的数据 是否哎数据库中
                // 前台发送的post请求    后流的方式 接收
                let data = "";
                req.on("data",chunk=>{
                    data+=chunk;
                })
                req.on("end",()=>{ 
                    data = JSON.parse(data)
                    req.body = data; //  挂载到req.body上  获取post请求的数据
                    console.log(req.body)
                    let flag = userData.some(item=>item.user==req.body.user&&item.pwd==req.body.pwd)
                    if(flag){
                        res.end(JSON.stringify({code:0,msg:"登陆成功"}))
                    }else{
                        res.end(JSON.stringify({code:1,msg:"登陆失败"}))
                    }
                })

            }
        // }
       
       

    }

}).listen(9090) 