var UtenteSalvato = localStorage.getItem('UtenteSalvato');
var loginPro = document.getElementById('loginPro');

var logo1 = document.getElementById('logo1');

benvenutoScritta();

function benvenutoScritta() {

    if (UtenteSalvato != null) {
        logo1.innerHTML = '<strong> Benvenut* su Trivial Code ' + UtenteSalvato + '</strong>';
    }

    else {
        logo1.innerHTML = '<strong> Benvenuti su Trivial Code!</strong>';
    }
}


proceduraLogin();

function proceduraLogin() {

    if (UtenteSalvato == null) {
        loginPro.innerHTML = 'Login'
    }

    else {
        loginPro.innerHTML = 'Chiudi sessione'
    }

}

function proceduraAccesso() {

    if (UtenteSalvato == null) {
        location.href = '#!';
    }

    else {
        location.href = '#!';
        localStorage.removeItem('UtenteSalvato');
        localStorage.removeItem('UtenteSalvato');
        location.reload();
    }

}

function selHome() {

    if (UtenteSalvato != null) {
        location.href = '#!home';
    }

    else {
        alert('Devi essere loggato per accedere alla homepage!')
    }
}

function quizA() {

    if (UtenteSalvato != null) {
        location.href = '#!quizA01';
    }

    else {
        alert('Devi essere loggato per accedere al quiz!')
    }
}

function quizB() {

    if (UtenteSalvato != null) {
        location.href = '#!quizB01';
    }

    else {
        alert('Devi essere loggato per accedere al quiz!')
    }
}

function quizC() {

    if (UtenteSalvato != null) {
        location.href = '#!quizC01';
    }

    else {
        alert('Devi essere loggato per accedere al quiz!')
    }
}