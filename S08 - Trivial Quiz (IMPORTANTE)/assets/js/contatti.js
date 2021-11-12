var benvenuto1 = document.getElementById('benvenuto1');

benvenuto1.innerHTML = '<div class="container text-center p-5"><h1 id="DisplayNome"></h1><img src="assets/img/TrivialCode_Logo.svg" width="450px" alt="Geek Store"><h3 class="text-white">Contattaci per qualsiasi tua richiesta 👇🏻</h3></div>';

btn_completa = document.getElementById('btn_completa')
formName = document.getElementById('formName')
textarea = document.getElementById('textarea')
formEmail = document.getElementById('formEmail');

btn_completa.addEventListener('click', function () {
    if (formEmail.value != '' && formName.value != '' && textarea.value != '') {
        document.getElementById('datiUtente').innerHTML = '<div class="container p-3"><h2 class="text-white text-center">Grazie ' + formName.value + '. La ricontatteremo noi al più presto, a questo indirizzo email: ' + formEmail.value;
    }

    else {
        alert("Compila tutti i campi gentile " + UtenteSalvato)
    }
})
