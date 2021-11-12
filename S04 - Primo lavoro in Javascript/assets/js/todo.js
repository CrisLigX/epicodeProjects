var add_btn = document.getElementById("add_btn");
var rem_btn = document.getElementById("rem_btn");
var close = document.getElementsByClassName("close");
var user_list = document.getElementById("ListaMia");
var user_list_array = [];
var buttonx = document.getElementById("buttonx")

window.addEventListener('load', init);
add_btn.addEventListener("click", nuovoElemento);
rem_btn.addEventListener("click", rimuovi);

function nuovoElemento() {
  var inputValue = document.getElementById("myInput").value;
  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Devi scrivere qualcosa!");
  } else {
    document.getElementById("ListaMia").appendChild(li);
    document.getElementById("myInput").value = "";
    user_list_array.push(inputValue);
    salvadati();

    // Pulsante X ad ogni elemento 
    var span = document.createElement("span");
    span.setAttribute("id", "buttonx");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    eraseButton();
  }
}

function init() {
  if (localStorage.getItem('elenco')) {
    user_list_array = localStorage.getItem('elenco').split(',');
  }
  costruisciLista();
}

function eraseButton() {
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function elimina() {
      var div = this.parentElement;
      div.parentNode.removeChild(div);
    }
  }
}

function salvadati() {
  localStorage.setItem('elenco', user_list_array);
}

function costruisciLista() {
  var lista = '';
  for (i = 0; i < user_list_array.length; i++) {
    lista += '<li>' + user_list_array[i] + '<span id="buttonx" onclick="eraseButton()" class="close">x</span></li>'; // Le X vanno aggiunte qui
  }
  user_list.innerHTML = lista;
}

function rimuovi() {
  if (user_list.hasChildNodes()) {
    user_list.innerHTML = "";
  }
  localStorage.clear();
}