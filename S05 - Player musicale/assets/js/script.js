$(document).ready(function () {
    let identificativo;
    let audio;
    let video;

    $.ajax({
        url: 'assets/js/audio.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (i, el) {
                audio = el.audio;
                identificativo = el.identificativo;
                $('#audioEl').append('<li id="item_' + identificativo + '" class="borderDiv p-2">' + audio + '</li>');

                $("#item_" + identificativo).click(function () {
                    $('#AudioPlay').html('<audio controls src="' + data[i].path + '"></audio>');
                });
            })
        },
    })


    $.ajax({
        url: 'assets/js/video.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (i, el) {
                video = el.video;
                identificativo = el.identificativo;
                $('#videoEl').append('<li id="itemV_' + identificativo + '" class="borderDiv p-2">' + video + '</li>');;

                $("#itemV_" + identificativo).click(function () {
                    $('#VideoPlay').html('<video controls id="videoplayer" src="' + data[i].path + '"></video>');
                });
            })
        },
    })

})