const btn = document.querySelector('#btn');
const inpus = document.querySelectorAll('input');
btn.onclick = function(){
    const xhr = new XMLHttpRequest();
    let [user,pwd,repwd] = Array.from(inpus,el=>el.value);
    if(user.trim() !== '' && pwd.trim() !== '' && pwd===repwd){
        xhr.open('post','/registry');
        xhr.setRequestHeader('content-type','application/json');
        xhr.send(JSON.stringify({user,pwd})) 
        xhr.onload = ()=>{
            let data = JSON.parse(xhr.responseText);
            alert(data.msg);
            if(data.code){ //注册成功
                window.location.href = '/';
            }
        }
    }else{
        alert('文本框不能空，并且两次密码要一致')
    }
}