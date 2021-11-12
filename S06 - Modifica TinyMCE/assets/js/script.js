var array = [];
var myForm = document.querySelector('#myForm');

tinymce.init({
    selector: '#txtTesto',
    height: 350,
});

window.addEventListener("load", init);

function init() {

    let txtTesto = tinymce.get("txtTesto").getContent();
    let txtTitolo = document.querySelector("#txtTitolo").value;

    if (txtTitolo != '') {

        let txtTestoS = localStorage.getItem("txtTestoS");
        let txtTitoloS = localStorage.getItem("txtTitoloS");

        $('#ElemSaveLista').html('<div onclick="caricamento()" class="text-center pointer"><h4 class="divBord">' + txtTitoloS + '</h4></div>');

    }
}

function salvataggio() {

    // let elArray = [];
    let txtTesto = tinymce.get("txtTesto").getContent();
    let txtTitolo = document.querySelector("#txtTitolo").value;

    if (txtTitolo != '' && txtTesto != '') {

        // elArray[0] = txtTitolo;
        // elArray[1] = txtTesto;

        localStorage.setItem("txtTestoS", txtTesto);

        $('#ElemSaveLista').html('<div onclick="caricamento()" class="text-center pointer"><h4 class="divBord">' + txtTitolo + '</h4></div>');
        localStorage.setItem("txtTitoloS", txtTitolo)
        elArray.push();
    }

    else {
        alert('Inserisci testo!')
    }
}

function caricamento() {
    let txtTestoS = localStorage.getItem("txtTestoS");
    let txtTitoloS = localStorage.getItem("txtTitoloS");
    txtTitolo.value = txtTitoloS
    tinymce.get("txtTesto").setContent(txtTestoS);
}

// function nuovoElemento() {

//     let txtTesto = tinymce.get("txtTesto").getContent();
//     let txtTitolo = document.querySelector("#txtTitolo").value;

//     if (txtTitolo != '') {

//         $('#ElemSaveLista').append('<div onclick="caricamento()" class="text-center pointer"><h4 class="divBord">' + txtTitolo + '</h4></div>');
//         localStorage.setItem("txtTitoloS", txtTitolo)
//     }

//     else {
//         alert('Inserisci testo!')
//     }

// }

function ripristina() {
    txtTitolo.value = '';
    tinymce.get("txtTesto").setContent('');
}