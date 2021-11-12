$(function () {

    var numero = 1;
    var totale = 1;
    $('#campoqta').val(totale);

    $('#aggiungi').on('click', function (e) {
        e.preventDefault();
        numero++;
        totale++;
        $('#campoqta').val(totale);
        $('#fieldset1').clone().attr({ 'id': 'fieldset' + numero, 'name': 'fieldset' + numero }).appendTo("#apt");
        $('<a href="javascript:void(0)">Elimina</a>').attr('id', 'elimina' + numero).appendTo('#fieldset' + numero);
        var id = '#fieldset'+numero;
        var el = '#elimina'+numero;

        $(el).on('click', function () {
            $(id).remove();
            totale = totale-1;
            $('#campoqta').val(totale);
        });


    });

});