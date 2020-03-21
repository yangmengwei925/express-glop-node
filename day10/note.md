# http  node内置模块
- 前后端分离  建立文件 俩个  一个存放前端 一个存放后台的
https://www.baidu.com:443/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=234&rsv_pq=f64636880005298a&rsv_t=ebfdlUDL9D5aG8Z9ROcrTeRRWUm6CWaJCca7LQiZhgFiT9Z6VyFwdENrgjs&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_sug3=4&rsv_sug1=3&rsv_sug7=101&inputT=1803&rsv_sug4=3904#123

# 认识http  url路径组成
- https  协议
  http
  ftp
- www.baidu.com  域名
    一级域名
    bawei.ts.cn  
    二级域名
- 端口号 范围 1~65532 
    3000以下的端口 基本已被占用

    https =>默认端口号443
    http =>默认端口号80
- /s  路径 请求的路径  (接口)
- 搜索字符串  ie=utf-8 & f=8
- 哈希值 #123

# 哪些行为 自发的可以向服务器发出请求
- 输入url地址+回车   www.baidu.com
- 带href属性 或者 src属性的都可以自发的向服务器发出请求
- a  link script img vedio audio 
- 表单元素 自发向服务器发出请求
- form action="http/www.baidu.com/s"  method=get/post