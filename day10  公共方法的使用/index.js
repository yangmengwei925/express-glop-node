const http = require('http');
const util = require('./util');
const {existsSync,readFileSync} = require('fs');
const path = require('path');
const url = require('url');
const publicPath = (pathname)=>path.join('public',pathname);
const Mock = require('mockjs');
let userJson = './user/index.json';
const server = http.createServer((req,res)=>{
    //req 是请求对象 request
    //res 响应对象  response
    // console.log(req.method);  ///aa /aa?name=zs
    if(req.url === '/favicon.ico'){
        res.end('');
        return;
    }
    let pathname = req.url === '/' ? 'index.html' : url.parse(req.url).pathname;
    let isFile = path.extname(pathname); //有后缀名是一个文件
    if(isFile){ //文件
        //publicPath(pathname) 真正读取的文件
        let filepath = publicPath(pathname);
        if(existsSync(filepath)){
            util.readfile(filepath).then((data)=>{
                res.end(data);
            },(error)=>{
                res.end(error);
            })
        }else{ //文件不存在
            res.statusCode = 404;
            res.end();
        }
        return;
        // console.log(publicPath(pathname));
    }
    //接口
    switch(pathname){
        case '/login': //登陆
            util.getData(req,data=>{
                let loginres = {
                    code:1,
                    msg:'success'
                }
                let userdata = JSON.parse(readFileSync(userJson,'utf8'));
                let isuser = userdata.some(item=>item.user===data.user && item.pwd===data.pwd);
                if(!isuser){
                    loginres.code = 0;
                    loginres.msg = '用户名或密码输入有误'
                }
                res.end(JSON.stringify(loginres))
            })
        break;
        case '/list': //列表
            util.getData(req,data=>{
                let {limit,page} = data; //获取get请求发送过来的参数
                let images = Mock.Random.image('300x300','#03a9f4','1704B');
                let mockdata = Mock.mock({
                    [`list|${limit}`]:[
                        {
                            title:'@ctitle',
                            'id|+1':(page-1)*limit,
                            img:images
                        }
                    ]
                });
                res.end(JSON.stringify(mockdata));
            }) 
        break;
        case '/registry':  //注册 
            util.getData(req,data=>{
                //data是post请求发送过来的数据 //{user,pwd};
                //获取之前用户数据
                let userdata = JSON.parse(readFileSync(userJson,'utf8'));
                //添加要注册的用户
                let isUser = userdata.find(item=>item.user === data.user);
                let resulte = {
                    code:1,
                    msg:'注册成功'
                }
                if(isUser){ //用户存在
                    resulte.code = 0;
                    resulte.msg = '该用户已存在';
                    res.end(JSON.stringify(resulte));
                }else{ //用户不存在
                    userdata.push(data);
                    //重新写入json
                    util.writefile(userJson,JSON.stringify(userdata)).then(()=>{
                        res.end(JSON.stringify(resulte))
                    },error=>{
                        resulte.code = 0;
                        resulte.msg = error;
                        res.end(JSON.stringify(resulte))
                    })
                } 
            })
        break;
        default :  //404
            util.readfile(publicPath('404.html')).then(data=>{
                res.end(data);
            })
    }
    
    
})

server.listen(8000,()=>{
    // console.log(server.address()); //服务地址相关
    console.log(`port is ${server.address().port}`);
})
