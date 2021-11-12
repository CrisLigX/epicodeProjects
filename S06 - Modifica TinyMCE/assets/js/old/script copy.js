$(document).ready(function () {

    var txtTitolo = document.querySelector('#txtTitolo');
    var txtTesto = document.querySelector('#txtTesto');
    var btn_salva = document.querySelector('#btn_salva');
    var btn_elimina = document.querySelector('#btn_cancella');
    var btn_ripristina = document.querySelector('#btn_ripristina');
    let ElemSaveLista = document.querySelector('#ElemSaveLista');
    var numero = 0;

    var DatiSalvati = localStorage.getItem('DatiSalvati');
    var DatiSalvati2 = localStorage.getItem('DatiSalvati2');

    ElemSaveLista.innerHTML += '<div class="divBord" id="Elem' + numero + '"><h4>' + DatiSalvati + '</h4>' + DatiSalvati2 + '</div>';


    btn_salva.addEventListener('click', () => {

        numero++

        if (txtTitolo.value != '' && txtTesto.value != '') {

            
            window.location.reload(true)
            ElemSaveLista.innerHTML += '<div class="divBord" id="Elem' + numero + '"><h4>' + txtTitolo.value + '</h4>' + txtTesto.value + '</div>';

            localStorage.setItem('DatiSalvati', txtTitolo.value);
            localStorage.setItem('DatiSalvati2', txtTesto.value);
        }

        else {
            alert('Compila tutti i campi per salvare!');
        }
    })

    btn_elimina.addEventListener('click', () => {
        txtTitolo.value = '';
        tinymce.activeEditor.setContent("");
    })

    btn_ripristina.addEventListener('click', () => {
        txtTitolo.value = 'Prova 1';
        txtTesto.value = 'Scrivi qualcosa!';
    })
})