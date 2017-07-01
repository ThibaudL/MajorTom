$(function () {

    $('.btn-localiser').on('click', function (e) {
        navigator.geolocation.getCurrentPosition(successGeoloc);
    });

    function successGeoloc(pos) {
        var crd = pos.coords;

        $.ajax({
            type: "POST",
            url: "http://192.168.110.141:8080/api/geolocalisation/thisishome/"+crd.latitude+"/"+crd.longitude,
            success: function (data) {
                $('#myModal .modal-body').append('<div class="alert alert-success mt-2" role="alert">Vos coordonnées ont bien été reçues '+ data +'</div>');
            },
            error: function (data) {
                $('#myModal .modal-body').append('<div class="alert alert-danger mt-2" role="alert">Nous n\'avons pas reçu vos coordonnées, veuillez vérifier votre connexion</div>');
            },
            dataType: "json"
        });
    };

    $('#myModal').on('hidden.bs.modal', function (e) {
        $('#myModal .alert').remove();
    });


        $('#myModalScenari').on('show.bs.modal', function (e) {

            $.getJSON("http://192.168.110.141:8080/api/appareils", function(data) {
                var tableauFormate = [];
                var count = 0;

                $.each(data, function(key, val) {
                    tableauFormate = data.map((val) => val.piece).reduce((a,b) => {
                            if(!a)
                        a = [];
                        (!a.includes(b) && a.push(b));
                        return a;
                    },[]);
                });


                tableauFormate.forEach(function (item) {
                    $('#selectTypePiece')
                        .append('<option value="'+item+'">'+item+'</option>');
                });

                $('#selectTypePiece').on('change', function (e) {
                    $('.prise-container .icon').remove();
                    var counter = 0;
                    $.each(data, function(key, val) {
                        var substring1 = "prise";
                        if(val.piece == e.target.value && val.appareil != undefined && val.appareil.includes(substring1)) {
                            $('.prise-container')
                                .append('<button class="btn btn-primary icon mr-1 enable" value="'+val.piece+'" data-status="enable"  data-toggle="tooltip" data-placement="top" title="Prise '+counter+'"><i class="fa fa-plug"></i></button>');

                            counter++;
                        }

                    });

                    $('.prise-container .icon').on('click', function (e) {
                        console.log($(this));
                        if($(this).hasClass('enable')) {
                            $(this).removeClass('enable');
                            $(this).addClass('disable');
                            $(this).data('status', 'disable');
                        } else {
                            $(this).removeClass('disable');
                            $(this).addClass('enable');
                            $(this).data('status', 'enable');
                        }
                    });
                });


        });

    });

    $.simpleWeather({
        location: 'Poitiers',
        woeid: '',
        unit: 'c',
        success: function(weather) {

            html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
            html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
            html += '<li class="currently">'+weather.currently+'</li>';
            html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});