let jsonHtml = (lista: any) => {
    document.querySelector('#stampaTodo').innerHTML = '';
    lista.forEach((lista, index) => {
        let li = document.createElement('li');
        li.innerHTML = `<div class="border"> <span>${lista.todo}</span>
        <button type="button" class="btn btn-danger text-white btn-sm float-right" onclick="deleteUser(${lista.id})">X</button>
        <button type="button" class="btn btn-warning btn-sm float-right" onclick="updateUser(${lista.id})">Modifica</button></div>`;
        document.getElementById('stampaTodo').append(li)
    });
}



let getUsers = () => {
    fetch('http://localhost:3000/lista')
        .then(response => response.json())
        .then(json => jsonHtml(json));
}



let updateUser = (id:number) => {
    let input: any = document.querySelector('#inputNostro');
    let obj: any = {
        todo: input.value,
    }
    obj.id = id;
    fetch('http://localhost:3000/lista/' + id, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: { 'Content-type': 'application/json; charset= UTF-8' } 
    }).then(response => response.json()).then(json => { console.log(json); getUsers(); });
    console.log(obj)
}



let deleteUser = (id:number) => {
    fetch('http://localhost:3000/lista/' + id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            getUsers();
        });
}


getUsers();


document.addEventListener('DOMContentLoaded', function () {

    let addBtn = document.querySelector('#addBtn')
    addBtn.addEventListener('click', function () {
        addUser();
    })
})


let addUser = () => {
    let input = <HTMLInputElement> document.querySelector("#inputNostro");
    let obj: any = {
        todo: input.value,
    }
    fetch('http://localhost:3000/lista', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-type': 'application/json; charset= UTF-8' }
    }).then(response => response).then(json => { console.log(json); getUsers(); });
}


let obj = new Object();