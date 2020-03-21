const xhr = new XMLHttpRequest();
xhr.open('get','/list?page=1&limit=10')
xhr.send(null);
xhr.onload = function(){
    render(JSON.parse(xhr.responseText));
}
const list = document.querySelector('.list');
function render(data){
    list.innerHTML = data.list.map(item=>`
        <dl>
            <dt><img src="${item.img}" /></dt>
            <dd>
                <p>${item.title}</p>
            </dd>
        </dl>
    `).join('');
}