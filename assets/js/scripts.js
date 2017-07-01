$(function () {
    // navigator.geolocation.watchPosition();

    $('.btn-add-piece').on('click', function(){
        $('.form-pieces').load('/app/components/form-piece.html');
    });

    $( ".color" ).slider({
        orientation: "horizontal",
        range: "min",
        animate: true
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