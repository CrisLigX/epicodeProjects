var btn_aggiungi;
var btn_cancella = document.querySelector('#btn_cancella')
var txtTitolo;
var removeBtn;
var taskListHTML;
var tasksList = [];
var tasksList2 = [];

tinymce.init({ selector: 'textarea' });


window.addEventListener("load", init);

function init() {
    btn_aggiungi = document.querySelector("#btn_aggiungi");
    txtTitolo = document.querySelector("#txtTitolo");
    txtTesto = document.querySelector("#txtTesto");
    taskListHTML = document.querySelector("#ElemSaveLista");
    checkData();
    eventHandlers();
}

function eventHandlers() {
    btn_aggiungi.addEventListener("click", addTask);
}

function addTask() {
    if (txtTitolo.value != "") {
        window.location.reload(true)
        tasksList.push(txtTitolo.value);
        tasksList2.push(txtTesto.value);
        buildList();
        saveData();
        clearForms();
    }

    else {
        alert('Compila tutti i campi per salvare!');
    }
}

function clearForms() {
    txtTitolo.value = '';
}

function checkData() {
    if (localStorage.getItem('tasks')) {
        tasksList = localStorage.getItem('tasks').split(",");
        tasksList2 = localStorage.getItem('tasks2').split(",");
    }
    buildList();
}

function buildList() {
    var list = "";

    for (var i = 0; i < tasksList.length; i++) {
        list += "<li class='divBord d-flex justify-content-between align-items-center'>" + tasksList[i] + "<span onclick='effettoClick(" + i + ")' class='font-weight-bold pointer'>Elimina elemento</span></li>";
        list += "<li class='divBord2 d-flex justify-content-between align-items-center'>" + tasksList2[i];
    }

    txtTitolo.value = '';
    tinymce.activeEditor.setContent("");

    taskListHTML.innerHTML = list;
}

function saveData() {
    localStorage.setItem('tasks', tasksList);
    localStorage.setItem('tasks2', tasksList2);
}

function effettoClick(id) {
    tasksList.splice(id, 1);
    tasksList2.splice(id, 1);
    saveData();
    buildList();
}

function effettoClick2(id) {
    tasksList.splice(id, 1);
    tasksList2.splice(id, 1);
}

btn_cancella.addEventListener('click', () => {
    window.location.reload(true)
    localStorage.clear();
})