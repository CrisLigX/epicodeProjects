var add_btn = document.getElementById("add_btn");
var rem_btn = document.getElementById("rem_btn");
var close = document.getElementsByClassName("close");
var user_list = document.getElementById("ListaMia");
var i;
var user_list_array = [];

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
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.parentNode.removeChild(div);
    }
  }

}

function rimuovi() {
  if (user_list.hasChildNodes()) {
      user_list.innerHTML = "";
  }
  localStorage.clear();
}
