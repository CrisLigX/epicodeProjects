var user = document.getElementById("user").value;
var password = document.getElementById("password").value;
var avviso = document.getElementById("risultato_login");

function verifica() {

    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

if (user != '') {
    if (password != '') {
        window.location.assign("todo.html");;
    }
    else {
        avviso.innerHTML = '<p>Inserisci la password!</p>';
    }
}
else if (password != '') {
    avviso.innerHTML = '<p>Inserisci il tuo nome utente!</p>';
}
else {
    avviso.innerHTML = '<p style=color:red>Non hai inserito nulla!</p>';
}
}