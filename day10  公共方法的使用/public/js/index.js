const btn = document.querySelector('#btn');
const inpus = document.querySelectorAll('input');
const registry = document.querySelector('#registry');
btn.onclick = function(){
    const xhr = new XMLHttpRequest();
    let [user,pwd] = Array.from(inpus,el=>el.value);
    if(user.trim() !== '' && pwd.trim() !== ''){
        xhr.open('post','/login');
        xhr.setRequestHeader('content-type','application/json');
        xhr.send(JSON.stringify({user,pwd}));
        xhr.onload = res=>{
            let data = JSON.parse(xhr.responseText); 
            if(data.code){
                window.location.href="/list.html"
            }else{
                alert(data.msg);
            }
        }
    }else{
        alert('不能为空')
    }

}

registry.onclick = function(){
    window.location.href='./registry.html'
}