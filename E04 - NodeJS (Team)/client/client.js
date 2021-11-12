var jsonHtml = function (lista) {
    document.querySelector('#stampaTodo').innerHTML = '';
    lista.forEach(function (lista, index) {
        var li = document.createElement('li');
        li.innerHTML = "<div class=\"border\"> <span>" + lista.todo + "</span>\n        <button type=\"button\" class=\"btn btn-danger text-white btn-sm float-right\" onclick=\"deleteUser(" + lista.id + ")\">X</button>\n        <button type=\"button\" class=\"btn btn-warning btn-sm float-right\" onclick=\"updateUser(" + lista.id + ")\">Modifica</button></div>";
        document.getElementById('stampaTodo').append(li);
    });
};
var getUsers = function () {
    fetch('http://localhost:3000/lista')
        .then(function (response) { return response.json(); })
        .then(function (json) { return jsonHtml(json); });
};
var updateUser = function (id) {
    var input = document.querySelector('#inputNostro');
    var obj = {
        todo: input.value
    };
    obj.id = id;
    fetch('http://localhost:3000/lista/' + id, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: { 'Content-type': 'application/json; charset= UTF-8' }
    }).then(function (response) { return response.json(); }).then(function (json) { console.log(json); getUsers(); });
    console.log(obj);
};
var deleteUser = function (id) {
    fetch('http://localhost:3000/lista/' + id, {
        method: 'DELETE'
    })
        .then(function (response) { return response.json(); })
        .then(function (json) {
        console.log(json);
        getUsers();
    });
};
getUsers();
document.addEventListener('DOMContentLoaded', function () {
    var addBtn = document.querySelector('#addBtn');
    addBtn.addEventListener('click', function () {
        addUser();
    });
});
var addUser = function () {
    var input = document.querySelector("#inputNostro");
    var obj = {
        todo: input.value
    };
    fetch('http://localhost:3000/lista', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-type': 'application/json; charset= UTF-8' }
    }).then(function (response) { return response; }).then(function (json) { console.log(json); getUsers(); });
};
var obj = new Object();
