
window.onload = function getUsers(){
    let table = document.querySelector('#table')
    Object.keys(localStorage).forEach(item=>{
        // let x = JSON.parse(localStorage.getItem(item));
        if(item.includes('@') && item.includes('.'))
        {
            let userData = JSON.parse(localStorage.getItem(item));
            let tr = document.createElement('tr');
            for(let i in userData){
                let td = document.createElement('td');
                td.innerText = userData[i];
                tr.appendChild(td)
            }
            table.appendChild(tr)
        }
    })
}