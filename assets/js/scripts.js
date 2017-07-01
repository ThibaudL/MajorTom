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

    $('#myModalScenari').on('hidden.bs.modal	', function (e) {
        $('#myModal .alert').remove();
    });


        $('#myModalScenari').on('show.bs.modal', function (e) {

        $.getJSON("http://192.168.110.141:8080/api/appareils", function(data) {
            var pieces = [];
            var piece = new Object();
            var $prise = new Object();
            var $ligth = new Object();
            var tableauFormate = [];
            var count = 0;
            var tableauOrig = [{clé:1, valeur:10}, {clé:2, valeur:20}, {clé:3, valeur: 30}];

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
                    .append('<option value="'+count+'">foo</option>')
            });


        });


        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        function callback(data) {
            console.log('ok');
        }

    });

    $('.btn-add-piece').on('click', function(){

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
});