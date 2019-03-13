$('body').append('<button class="btn">Kliknij guzik</button>', '<div class="box"></div>').css({'position': 'relative', 'font-size': '12px', 'color': 'gold'});
$('.box').css({'height': '200', 'width': '200', 'background-color': 'red', 'position': 'absolute'});

    $('.btn').click(function() {
        $('div').animate({
          left: '100px'
        }, 1000 );

        $('.box').animate({
          height: '100px',
          width: '100px'
        }, 2000, zmianaKoloru );

        function zmianaKoloru() {
            console.log('funkcja działa');
            $('.box').animate({
            'background-color': 'blue'
          }, 5000, dodajNapis );
        };

        function dodajNapis() {
            $('.box').html('<h2>Animacja zakończona</h2>')};
    });
