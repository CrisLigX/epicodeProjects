var btn_salva;
var txtTitolo;
var removeBtn;
var taskListHTML;
var tasksList = [];

window.addEventListener("load", init);

function init(){
    btn_salva = document.querySelector("#btn_aggiungi");
    txtTitolo = document.querySelector("#txtTitolo");
    taskListHTML = document.querySelector("#ElemSaveLista");
    checkData();
    eventHandlers();
}

function eventHandlers(){
    btn_salva.addEventListener("click", addTask);
}

function addTask(){
    if (txtTitolo.value != "") {
    tasksList.push(txtTitolo.value);
    buildList();
    saveData();
    clearForms();
    }
}

function clearForms(){
    txtTitolo.value = '';
}

function checkData(){
    if(localStorage.getItem('tasks')){
        tasksList = localStorage.getItem('tasks').split(",");
    }
    buildList();
}

function buildList(){
    var list = "";
    for(var i=0; i < tasksList.length; i++){
        list += "<li class='divBord d-flex justify-content-between align-items-center'>" + tasksList[i] + "<span onclick='removeTask("+i+")' class='font-weight-bold pointer'>Seleziona elemento</span></li>";
    }
    taskListHTML.innerHTML = list;
}

function saveData(){
    localStorage.setItem('tasks', tasksList);
}

function removeTask(id){
    tasksList.splice(id, 1);
    saveData();
    buildList();
}