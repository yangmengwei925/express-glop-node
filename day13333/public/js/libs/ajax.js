//高级单例模式  闭包  对象
/**
 * 封装ajax yxl
 * 1、 创建一个ajax实例
 * 2、建立连接  打开浏览器与服务器连接
 * 3、发送请求
 * 4、等待服务器做出相应
 */
let ajax = (function(){
    const xhr = new XMLHttpRequest();
    function get(url,opt){
        return new Promise((resolve,reject)=>{
            // url = opt?url+"?"+
            xhr.open("get",url,async=false)
            xhr.send()
            xhr.onreadystatechange = function(){
                if(xhr.readyState===4){
                    if(xhr.status==200){
                        resolve(xhr.responseText)
                    }else{
                        reject(new Error)
                    }
                }
            }
        })
    }
    function post(url,opt){

    }

    return {
        get,
        post
    }
})()



// axios.get("/get",{

// }).then()
// axios.post("/post",{

// }).then(res=>{})

ajax.get().then(res=>{

})
// ajax.post()