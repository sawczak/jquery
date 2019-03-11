$('.btn1').css({'background-color': 'yellow'});
$(function() {
  $('.btn').click(function() {
    $('p:last').insertBefore('p:first');
    // $('p').before('p:last');
  });
});

$('body').append('<button class="btn2">Przycisk 2</button');
$('.btn2').css({'background-color': 'orange'});

$(function() {
  $('.btn2').click(function() {
    $('p:first').insertAfter('p:last');

  })
})