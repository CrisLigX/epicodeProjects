var elem = document.getElementById("barraProgresso");
var elem2 = document.getElementById("barraProgresso2");
var primaparte = document.getElementById("primaparte");
var secondaparte = document.getElementById("secondaparte");
var email = document.getElementById("email");
var password = document.getElementById("password");
var risultato = document.getElementById("risultato");
var NomeUtente = document.getElementById("NomeUtente");
var Username; 
var add_btn = document.querySelector("#add_btn")
let LoginFallito = localStorage.getItem('LoginFallito');
let UtenteSalvato = localStorage.getItem('UtenteSalvato');

// if (UtenteSalvato != null) {
//     location.href = 'home.html';
// }

if (LoginFallito == 'OK') {
    alert('Non puoi accedere se non hai effettuato il login!')
    localStorage.removeItem('LoginFallito');
}


add_btn.addEventListener('click', function() {
    
    var nome_utente = email.value;
    password_valore = password.value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var convalida;
    if (!filter.test(email.value)) {
        risultato.innerHTML = 'Inerisci una mail valida per continuare!'
        convalida = 1;
    }

    else {
        convalida = 0;
    }

    if (nome_utente == "") {
        risultato.innerHTML = 'Inerisci una mail per continuare!';
    }
    else if (password_valore == "") {

        risultato.innerHTML = 'Inerisci una Password per continuare!'
    }
    else {
        if (convalida == 0) {
            var idUtente = nome_utente.split("@");
            Username = idUtente[0];
            risultato.innerHTML = '<i>Benvenuto '+ Username + '</i>'; 
            localStorage.setItem('UtenteSalvato', Username);   
            localStorage.setItem('SceltaUtente', 'home');
            localStorage.setItem('NomeCarrello', Username)
            localStorage.setItem('LoginFallito', 'NO');
            window.location.assign("home.html");
        }
    }
})

function carrelloNo() {
    alert('Non puoi visualizzare il carrello se non effettui il login!')
}

function loginNo() {
    alert('Sei già sulla pagina di login!')
}

function registrati() {
    alert('Purtroppo è un tasto finto! 😬')
}

