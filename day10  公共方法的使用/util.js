const fs = require('fs');
const url = require('url');
module.exports = {
    writefile(filepath,data){
        return new Promise((reslove,reject)=>{
            fs.writeFile(filepath,data,error=>{
                if(error){
                    reject(error.message);
                    return;
                }
                reslove();
            })
        })
    },
    readfile(filepath){
        return new Promise((resolve,reject)=>{
            fs.readFile(filepath,(error,data)=>{
                if(error){
                    reject(error.message)
                    return;
                }
                resolve(data);
            })
        })
    },
    getData(req,ck){ //req请求对象 ck函数
        if(req.method === 'POST'){ //post方式
            let data = '';
            req.on('data',chunk=>{
                data += chunk
            });
            req.on('end',()=>{
                ck(JSON.parse(data));
            })
        }else{
            let data = url.parse(req.url,true).query;
            ck(data);
        }
    }
}