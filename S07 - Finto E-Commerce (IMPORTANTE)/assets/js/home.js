// import { prodotti } from '../js/moduli.js'

class prodotti {
    constructor(nome, categoria, identificativo, prezzo, immagine) {
        this.nome = nome;
        this.categoria = categoria;
        this.identificativo = identificativo;
        this.prezzo = prezzo;
        this.immagine = immagine;
    }
}

let UtenteSalvato = localStorage.getItem('UtenteSalvato')
let SceltaUtente = localStorage.getItem('SceltaUtente')
var benvenuto = document.getElementById('benvenuto');
let CartAR = [];

if (UtenteSalvato == null) {
    location.href = 'index.html';
    localStorage.setItem('LoginFallito', 'OK');
}

if (SceltaUtente == 'home') {

    var benvenuto2 = document.getElementById('benvenuto2');
    benvenuto2.innerHTML = '<h2 class="container text-center text-white"> Bentornat* ' + UtenteSalvato + ' su GeekStore!</h2>'

}

$(document).ready(function () {

    if (SceltaUtente == 'carrello') {
        carrello();
    }

    // Cosa succede quando si va sulla home o si selezionano tutte le categorie

    if (SceltaUtente == 'home' || SceltaUtente == 'catH') {

        benvenuto.innerHTML = '<div class="container text-center p-5"><h1 id="DisplayNome"></h1><img src="assets/img/geekstore_logo.svg" width="450px" alt="Geek Store"><h3 class="text-white">Catalogo completo 👇🏻</h3></div>';

        $('#mainCategoria1').append('<div class="sfondoCategoriaPop"><h1 class="container text-center text-white ombratesto pt-5">Tutti i nostri Funko POP™</h1><div class="container-fluid col margiauto d-md-flex justify-content-center p-5" id="elencoProdotti1"></div>');

        $.ajax({
            url: 'assets/js/funkopop.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (i, el) {
                    let nome = el.nome;
                    let categoria = el.categoria;
                    let identificativo = el.identificativo;
                    let prezzo = el.prezzo;
                    let immagine = el.immagine;

                    $('#elencoProdotti1').append('<div id="id_' + identificativo + '" class="card m-2" style="width: 18rem;">' +
                        '<img class="card-img-top" src="' + immagine + '" alt="Card image cap">' +
                        '<div class="card-body">' +
                        '<h5 class="card-title">' + nome + '</h5>' +
                        '<p class="card-description">' + categoria + '</p>' +
                        '<p> €' + prezzo + '</p>' +
                        '<button id="bd_' + identificativo + '"type="button" class="btn btn-primary m-1">Aggiungi</button>' +
                        '<button id="pd_' + identificativo + '"type="button" class="btn btn-secondary">Dettaglio</button>' +
                        '</div>' +
                        '</div>');

                    $("#bd_" + identificativo).click(function () {
                        var funkopop = new prodotti(nome, categoria, identificativo, prezzo, immagine);
                        CartAR.push(funkopop);
                        localStorage.setItem('CarrelloUtente' + UtenteSalvato, JSON.stringify(CartAR));
                        alert('Hai aggiunto ' + nome + ' al tuo carrello!')

                        console.log(CartAR);
                        console.log(localStorage.getItem('CarrelloUtente' + UtenteSalvato));
                    });

                    $("#pd_" + identificativo).click(function () {
                        alert('Hai selezionato il prodotto: ' + nome + ', della categoria: ' + categoria + ' dal prezzo di: € ' + prezzo)
                    });


                });
            }

        });

        $('#mainCategoria2').append('<div class="sfondoCategoriaTavolo"><h1 class="container text-center text-white ombratesto pt-5">Tutti i nostri Giochi da tavolo</h1><div class="container-fluid col d-md-flex justify-content-center p-5" id="elencoProdotti2"></div>');

        $.ajax({
            url: 'assets/js/giochitavolo.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (i, el) {
                    let nome = el.nome;
                    let categoria = el.categoria;
                    let identificativo = el.identificativo;
                    let prezzo = el.prezzo;
                    let immagine = el.immagine;

                    $('#elencoProdotti2').append('<div id="id_' + identificativo + '" class="card m-2" style="width: 18rem;">' +
                        '<img class="card-img-top" src="' + immagine + '" alt="Card image cap">' +
                        '<div class="card-body">' +
                        '<h5 class="card-title">' + nome + '</h5>' +
                        '<p class="card-description">' + categoria + '</p>' +
                        '<p> €' + prezzo + '</p>' +
                        '<button id="bd_' + identificativo + '"type="button" class="btn btn-primary m-1">Aggiungi</button>' +
                        '<button id="pd_' + identificativo + '"type="button" class="btn btn-secondary">Dettaglio</button>' +
                        '</div>' +
                        '</div>');

                    $("#bd_" + identificativo).click(function () {
                        var giochitavolo = new prodotti(nome, categoria, identificativo, prezzo, immagine);
                        CartAR.push(giochitavolo);
                        localStorage.setItem('CarrelloUtente' + UtenteSalvato, JSON.stringify(CartAR));
                        alert('Hai aggiunto ' + nome + ' al tuo carrello!')

                        console.log(CartAR);
                        console.log(localStorage.getItem('CarrelloUtente' + UtenteSalvato));
                    });

                    $("#pd_" + identificativo).click(function () {
                        alert('Hai selezionato il prodotto: ' + nome + ', della categoria: ' + categoria + ' dal prezzo di: € ' + prezzo)
                    });


                });
            }
        });

        $('#mainCategoria3').append('<div  class="sfondoCategoriaVideogames"><h1 class="container text-center text-white ombratesto pt-5">Tutti i nostri Videogames (License Key)</h1><div class="container-fluid col d-md-flex justify-content-center p-5" id="elencoProdotti3"></div>');

        $.ajax({
            url: 'assets/js/videogames.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (i, el) {
                    let nome = el.nome;
                    let categoria = el.categoria;
                    let identificativo = el.identificativo;
                    let prezzo = el.prezzo;
                    let immagine = el.immagine;

                    $('#elencoProdotti3').append('<div id="id_' + identificativo + '" class="card m-2" style="width: 18rem;">' +
                        '<img class="card-img-top" src="' + immagine + '" alt="Card image cap">' +
                        '<div class="card-body">' +
                        '<h5 class="card-title">' + nome + '</h5>' +
                        '<p class="card-description">' + categoria + '</p>' +
                        '<p> €' + prezzo + '</p>' +
                        '<button id="bd_' + identificativo + '"type="button" class="btn btn-primary m-1">Aggiungi</button>' +
                        '<button id="pd_' + identificativo + '"type="button" class="btn btn-secondary">Dettaglio</button>' +
                        '</div>' +
                        '</div>');

                    $("#bd_" + identificativo).click(function () {
                        var videogames = new prodotti(nome, categoria, identificativo, prezzo, immagine);
                        CartAR.push(videogames);
                        localStorage.setItem('CarrelloUtente' + UtenteSalvato, JSON.stringify(CartAR));
                        alert('Hai aggiunto ' + nome + ' al tuo carrello!')

                        console.log(CartAR);
                        console.log(localStorage.getItem('CarrelloUtente' + UtenteSalvato));
                    });

                    $("#pd_" + identificativo).click(function () {
                        alert('Hai selezionato il prodotto: ' + nome + ', della categoria: ' + categoria + ' dal prezzo di: € ' + prezzo)
                    });


                });
            }
        });

    }

    // Cosa succede quando si sceglie la categoria "Funko POP"

    else if (SceltaUtente == 'catA') {


        $('#mainCategoria1').append('<div class="sfondoCategoriaPop"><h1 class="container text-center text-white ombratesto pt-5">Tutti i nostri Funko POP™</h1><div class="container-fluid col-12 d-md-flex justify-content-center p-5" id="elencoProdotti1"></div>');

        $.ajax({
            url: 'assets/js/funkopop.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (i, el) {
                    let nome = el.nome;
                    let categoria = el.categoria;
                    let identificativo = el.identificativo;
                    let prezzo = el.prezzo;
                    let immagine = el.immagine;

                    $('#elencoProdotti1').append('<div id="id_' + identificativo + '" class="card m-2" style="width: 18rem;">' +
                        '<img class="card-img-top" src="' + immagine + '" alt="Card image cap">' +
                        '<div class="card-body">' +
                        '<h5 class="card-title">' + nome + '</h5>' +
                        '<p class="card-description">' + categoria + '</p>' +
                        '<p> €' + prezzo + '</p>' +
                        '<button id="bd_' + identificativo + '"type="button" class="btn btn-primary m-1">Aggiungi</button>' +
                        '<button id="pd_' + identificativo + '"type="button" class="btn btn-secondary">Dettaglio</button>' +
                        '</div>' +
                        '</div>');

                    $("#bd_" + identificativo).click(function () {
                        var funkopop = new prodotti(nome, categoria, identificativo, prezzo, immagine);
                        CartAR.push(funkopop);
                        localStorage.setItem('CarrelloUtente' + UtenteSalvato, JSON.stringify(CartAR));
                        alert('Hai aggiunto ' + nome + ' al tuo carrello!')

                        console.log(CartAR);
                        console.log(localStorage.getItem('CarrelloUtente' + UtenteSalvato));
                    });

                    $("#pd_" + identificativo).click(function () {
                        alert('Hai selezionato il prodotto: ' + nome + ', della categoria: ' + categoria + ' dal prezzo di: € ' + prezzo)
                    });


                });
            }

        });

    }

    // Cosa succede quando si sceglie la categoria "Giochi da tavolo"

    else if (SceltaUtente == 'catB') {

        $('#mainCategoria2').append('<div class="sfondoCategoriaTavolo"><h1 class="container text-center text-white ombratesto pt-5">Tutti i nostri Giochi da tavolo</h1><div class="container-fluid col d-md-flex justify-content-center p-5" id="elencoProdotti2"></div>');

        $.ajax({
            url: 'assets/js/giochitavolo.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (i, el) {
                    let nome = el.nome;
                    let categoria = el.categoria;
                    let identificativo = el.identificativo;
                    let prezzo = el.prezzo;
                    let immagine = el.immagine;

                    $('#elencoProdotti2').append('<div id="id_' + identificativo + '" class="card m-2" style="width: 18rem;">' +
                        '<img class="card-img-top" src="' + immagine + '" alt="Card image cap">' +
                        '<div class="card-body">' +
                        '<h5 class="card-title">' + nome + '</h5>' +
                        '<p class="card-description">' + categoria + '</p>' +
                        '<p> €' + prezzo + '</p>' +
                        '<button id="bd_' + identificativo + '"type="button" class="btn btn-primary m-1">Aggiungi</button>' +
                        '<button id="pd_' + identificativo + '"type="button" class="btn btn-secondary">Dettaglio</button>' +
                        '</div>' +
                        '</div>');

                    $("#bd_" + identificativo).click(function () {
                        var giochitavolo = new prodotti(nome, categoria, identificativo, prezzo, immagine);
                        CartAR.push(giochitavolo);
                        localStorage.setItem('CarrelloUtente' + UtenteSalvato, JSON.stringify(CartAR));
                        alert('Hai aggiunto ' + nome + ' al tuo carrello!')

                        console.log(CartAR);
                        console.log(localStorage.getItem('CarrelloUtente' + UtenteSalvato));
                    });

                    $("#pd_" + identificativo).click(function () {
                        alert('Hai selezionato il prodotto: ' + nome + ', della categoria: ' + categoria + ' dal prezzo di: € ' + prezzo)
                    });


                });
            }
        });

    }

    // Cosa succede quando si sceglie la categoria "Videogames"

    else if (SceltaUtente == 'catC') {

        $('#mainCategoria3').append('<div  class="sfondoCategoriaVideogames"><h1 class="container text-center text-white ombratesto pt-5">Tutti i nostri Videogames (License Key)</h1><div class="container-fluid col d-md-flex justify-content-center p-5" id="elencoProdotti3"></div>');

        $.ajax({
            url: 'assets/js/videogames.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                $.each(data, function (i, el) {
                    let nome = el.nome;
                    let categoria = el.categoria;
                    let identificativo = el.identificativo;
                    let prezzo = el.prezzo;
                    let immagine = el.immagine;

                    $('#elencoProdotti3').append('<div id="id_' + identificativo + '" class="card m-2" style="width: 18rem;">' +
                        '<img class="card-img-top" src="' + immagine + '" alt="Card image cap">' +
                        '<div class="card-body">' +
                        '<h5 class="card-title">' + nome + '</h5>' +
                        '<p class="card-description">' + categoria + '</p>' +
                        '<p> €' + prezzo + '</p>' +
                        '<button id="bd_' + identificativo + '"type="button" class="btn btn-primary m-1">Aggiungi</button>' +
                        '<button id="pd_' + identificativo + '"type="button" class="btn btn-secondary">Dettaglio</button>' +
                        '</div>' +
                        '</div>');

                    $("#bd_" + identificativo).click(function () {
                        var videogames = new prodotti(nome, categoria, identificativo, prezzo, immagine);
                        CartAR.push(videogames);
                        localStorage.setItem('CarrelloUtente' + UtenteSalvato, JSON.stringify(CartAR));
                        alert('Hai aggiunto ' + nome + ' al tuo carrello!')

                        console.log(CartAR);
                        console.log(localStorage.getItem('CarrelloUtente' + UtenteSalvato));
                    });

                    $("#pd_" + identificativo).click(function () {
                        alert('Hai selezionato il prodotto: ' + nome + ', della categoria: ' + categoria + ' dal prezzo di: € ' + prezzo)
                    });

                });
            }
        });

    }

})

let CarrelloUtente = localStorage.getItem('CarrelloUtente' + UtenteSalvato);

if (CarrelloUtente != null) {
    CartAR = JSON.parse(CarrelloUtente);
}

function catA() {
    localStorage.setItem('SceltaUtente', 'catA');
    location.href = 'home.html';
}

function catB() {
    localStorage.setItem('SceltaUtente', 'catB');
    location.href = 'home.html';
}

function catC() {
    localStorage.setItem('SceltaUtente', 'catC');
    location.href = 'home.html';
}

function catH() {
    localStorage.setItem('SceltaUtente', 'catH');
    location.href = 'home.html';
}

function sel_home() {
    localStorage.setItem('SceltaUtente', 'home');
    location.href = 'home.html';
}

CarrelloParse = JSON.parse(localStorage.getItem('CarrelloUtente' + UtenteSalvato));

// Cosa succede quando si clicca sul carrello

function carrello() {

    localStorage.setItem('SceltaUtente', 'carrello');

    $('#benvenuto2').html('');
    $('#benvenuto').html('');
    $('#carrello2').html('');
    $('#carrello').html('');
    $('#mainCategoria1').html('');
    $('#mainCategoria2').html('');
    $('#mainCategoria3').html('');
    $('#contatti').html('');


    if (CarrelloParse != null) {

        $('#carrello').append('<div><h1 class="container text-center text-white ombratesto pt-5">Questo è il carrello di ' + UtenteSalvato + '</h1><div class="container-fluid col d-md-flex justify-content-center p-5" id="carrello2"></div>');

        for (let i = 0; i < CarrelloParse.length; i++) {

            $('#carrello2').append('<div class="card m-2" style="width: 18rem;">' +
                '<img class="card-img-top" src="' + CarrelloParse[i].immagine + '" alt="Card image cap">' +
                '<div class="card-body">' +
                '<h5 class="card-title">' + CarrelloParse[i].nome + '</h5>' +
                '<p class="card-description">' + CarrelloParse[i].categoria + '</p>' +
                '<p> €' + CarrelloParse[i].prezzo + '</p>' +
                '</div>' +
                '</div>');

        }

        var totale = '';
        var y = 0;

        for (i = 0; i < CarrelloParse.length; i++) {
            totale = y += CarrelloParse[i].prezzo;
            console.log(totale)
            TotaleS = localStorage.setItem('TotaleS', totale);
        }

        $('#carrello').append('<div class="container text-center"><button class="m-2 btn btn-danger" type="button" id="btn_svuota" >Svuota carrello</button><button class="m-2 btn btn-primary" type="button" onclick="completaAcquisto()" id="btn_acquista">Completa acquisto</button><h3 class="text-white p-5" id="prezzoTot">Prezzo totale da pagare: </h3></div>')

        document.getElementById('prezzoTot').innerHTML += '€' + totale;

        btn_svuota = document.getElementById('btn_svuota')

        btn_svuota.addEventListener('click', function () {
            localStorage.removeItem('CarrelloUtente' + UtenteSalvato)
            location.href = 'home.html';
            localStorage.setItem('SceltaUtente', 'home');
        })

    }

    else {
        $('#carrello').append('<div class="vh-100"><h1 class="container text-center text-white ombratesto pt-5">Salve ' + UtenteSalvato + '. Il tuo carrello al momento è vuoto.</h1><div class="container-fluid col d-md-flex justify-content-center p-5" id="carrello2"></div>');
    }

}

// Cosa succede quando si completa l'acquisto

function completaAcquisto() {

    $('#benvenuto2').html('');

    TotaleS = localStorage.getItem('TotaleS');

    benvenuto.innerHTML = '<div class="container text-center p-5"><h1 id="DisplayNome"></h1><img src="assets/img/geekstore_logo.svg" width="450px" alt="Geek Store"><h3 class="text-white">Completa il tuo acquisto 👇🏻 Totale da pagare: €' + TotaleS + '</h3></div>';

    $('#carrello2').html('');
    $('#carrello').html('');
    $('#mainCategoria1').html('');
    $('#mainCategoria2').html('');
    $('#mainCategoria3').html('');
    $('#contatti').html('');

    $('#contatti').append('<form class="container vh-90 text-white">' +
        '<div class="form-row">' +
        '<div class="form-group col-md-6">' +
        '<label for="formName">Nome completo</label>' +
        '<input type="nome" class="form-control" id="formName" placeholder="Inserisci il tuo nome completo">' +
        '</div>' +
        '<div class="form-group col-md-6">' +
        '<label for="formEmail">E-mail</label>' +
        '<input type="email" class="form-control" id="formEmail" placeholder="Inserisci una mail valida">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="formAddress">Indirizzo di spedizione</label>' +
        '<input type="text" class="form-control" id="formAddress" placeholder="Inserisci il tuo indirizzo">' +
        '<div><label for="inlineRadio1">Seleziona metodo di pagamento</label><div>' +
        '<div class="form-check form-check-inline">' +
        '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">' +
        '<label class="form-check-label" for="inlineRadio1">Paypal</label>' +        
        '<table border="0" cellpadding="10" cellspacing="0" align="center"><tr><td align="center"></td></tr><tr><td align="center"><a href="https://www.paypal.com/in/webapps/mpp/paypal-popup"><img src="https://www.paypalobjects.com/webstatic/en_AU/i/buttons/btn_paywith_primary_l.png" alt="Pay with PayPal" /></a></td></tr></table>' +
        '</div>' +
        '<div class="form-check form-check-inline">' +
        '<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">' +
        '<label class="form-check-label" for="inlineRadio2">Bonifico bancario</label>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="text-center"><button type="button" onclick="carrello()" class="btn btn-primary m-2">Torna al carrello</button>' +
        '<button type="button" id="btn_completa" class="btn btn-success m-2">Completa acquisto</button></div>' +
        '<div id="datiUtente"></div>' +
        '<hr>' +
        '<div id="spazio"></div>' +
        '</form>');

    btn_completa = document.getElementById('btn_completa')
    formName = document.getElementById('formName')
    formAddress = document.getElementById('formAddress')
    formEmail = document.getElementById('formEmail');

    btn_completa.addEventListener('click', function () {
        if (formEmail.value != '' && formName.value != '' && formAddress.value != '') {
            document.getElementById('datiUtente').innerHTML = '<div class="container p-3"><h2 class="text-white text-center">Complimenti ' + formName.value + '. Il suo acquisto è andato a buon fine. Invieremo i suoi acquisti all\'indirizzo: ' + formAddress.value;
            localStorage.removeItem('CarrelloUtente' + UtenteSalvato)
        }

        else {
            alert("Compila tutti i campi gentile " + UtenteSalvato)
        }

    })
};

// Cosa succede quando si clicca su contatti

function contatti() {

    $('#benvenuto2').html('');

    benvenuto.innerHTML = '<div class="container text-center p-5"><h1 id="DisplayNome"></h1><img src="assets/img/geekstore_logo.svg" width="450px" alt="Geek Store"><h3 class="text-white">Contattaci per qualsiasi tua richiesta 👇🏻</h3></div>';

    $('#carrello2').html('');
    $('#carrello').html('');
    $('#mainCategoria1').html('');
    $('#mainCategoria2').html('');
    $('#mainCategoria3').html('');
    $('#contatti').html('');

    $('#contatti').append('<form class="container text-white">' +
        '<div class="form-row">' +
        '<div class="form-group col-md-6">' +
        '<label for="formName">Nome completo</label>' +
        '<input type="nome" class="form-control" id="formName" placeholder="Inserisci il tuo nome completo">' +
        '</div>' +
        '<div class="form-group col-md-6">' +
        '<label for="formEmail">E-mail</label>' +
        '<input type="email" class="form-control" id="formEmail" placeholder="Inserisci una mail valida">' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="textarea">Aggiungi richiesta</label>' +
        '<textarea type="text" class="form-control" id="textarea"></textarea>' +
        '</div>' +
        '</div>' +
        '<button type="submit" id="btn_completa" class="btn btn-primary">Invia richiesta</button>' +
        '<div id="datiUtente"></div>' +
        '<hr>' +
        '<div id="spazio"></div>' +
        '</form>');

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

}

// Cosa succede quando si chiude la sessione

function chiudisessione() {
    localStorage.removeItem('UtenteSalvato');
}
