# http  认识url 路径
- http://localhost:9090/tab?type=hot?#12
-协议   域名      端口号  路径  搜索字符串 哈希值
- let {pathname,query} = url.parse(req.url)

# 前后端分离
- 前端文件夹 public
- 后端创建一个文件 server.js

# aioxs 前端后台 都可以使用      基于promise封装的 ajax 
- Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中
- 


# ajax发出请求 restful风格的请求 八种 只要get/post
- get 请求
    - url？传参
    - 后台怎么接收？  利用query
    - 把get发送的请求数据 挂载在req.query上面  req.query =query

    - 相对来说不安全
    - get请求  传递的参数 数据量小
    - get对传递的参数 有限制 256

- post
    - send传参
    - 后台怎么接收？  利用req.on("data",chunk=>{data+=chunk})  req.on("end",()=>{data})
    - 把post发送的请求数据 挂载在req.body上面  req.body =data


    - 安全
    - 数据量大   流的方式读取
    - 没有字符限制