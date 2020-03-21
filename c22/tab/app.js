const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
let dataList = require("./data/data")

const server = http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url,true);
    pathname = pathname==="/"?"index.html":pathname;
    if(path.extname(pathname)){ //加载的静态资源
        res.end(fs.readFileSync(path.join(__dirname,"public",pathname)))
    }else{//加载的是接口文件
        if(pathname==="/getList"){
            let data = "";
            req.on("data",chunk=>{
                data+=chunk;
            })
            req.on("end",()=>{
                data = JSON.parse(data);
                console.log(data)
                    res.end(JSON.stringify(dataList[data.id]))
            })
        }
    }
})
server.listen(7070,()=>{
    console.log(server.address().port)
})