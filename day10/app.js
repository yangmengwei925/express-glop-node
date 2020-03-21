const http =require("http");
const fs =require("fs");
const url =require("url");
//创建服务
http.createServer((req,res)=>{//中间件
    // 中间件社么时候触发？前端向服务器发出请求
    // request 前端 向服务端发出的   请求体
    // reponse  服务端 响应给前端的数据  响应体
    // console.log(1);
    // response.end("2")
    console.log(req.url)
    console.log(url.parse(req.url))
    let {pathname,query} = url.parse(req.url)
    // if(request.url==="/"){
    //     response.end(fs.readFileSync("src/index.html"))
    // }else if(request.url==="/css/index.css"){
    //     response.end(fs.readFileSync("src/css/index.css"))
    // }else if(request.url==="/js/index.js"){
    //     response.end(fs.readFileSync("src/js/index.js"))
    // }

    // if(request.url==="/"){
    //     request.url==="/index.html"
    //        //  /index.html
    // }else if(req.url==="/css/index.css"){
    //     // response.end(fs.readFileSync("src"+req.url))
    // }else if(req.url==="/js/index.js"){
    //     // response.end(fs.readFileSync("src"+req.url))
    // }
    // res.end();
    if(req.url.includes("/favicon.ico")){
        return res.end();
    }
    pathname = pathname==="/"?"/index.html":pathname;
    res.end(fs.readFileSync("src"+pathname))

    
}).listen(9090,()=>{ //监听 端口号  回调
    console.log("9090端口正在被监听")
})