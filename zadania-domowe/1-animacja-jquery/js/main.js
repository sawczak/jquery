$('body').append('<button class="btn">Kliknij guzik</button>', '<div class="box"></div>').css({'font-size': '12px', 'color': 'gold'});
$('.box').css({'height': '200', 'width': '200', 'background-color': 'red', 'position': 'absolute'});

$(document).ready(function(){

  $('.btn').click(function() {
    $('div').animate({
      left: '100px',
      height: '100px',
      width: '100px'
    }, 3000, 

    function zmianaKoloru() {
      console.log('funkcja działa');
      $('.box').animate({
      'background-color': 'blue',
      }, 5000,  

      function dodajNapis() {
        $('.box').html('<h2>Animacja zakończona</h2>')};

    )};
  )});
});
    
  



      

        

    

  

