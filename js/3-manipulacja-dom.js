/* $(function() {
    let paragrafy = $('p');

    paragrafy.text('nvgklxgjkd tekst'); // we wszystkich paragrafach wstawi nowy tekst

    console.log(paragrafy.text()); // puty text() to wyświetla teksty z paragrafów

    $('span').html('<a href="a">Teraz link</a>'); //zamienia nam tekst na link


}) */


//dodawanie treści/* 
/* $(function() {
    let paragrafy = $('p');

    $('span').prepend('Prependujemy tekst!                   '); // rodzeństwo, jak nie ma znacznika p
    $('span').append('                          Appendujemy tekst!');

    $('span').before('<p>Beforujemy tekst!</p>'); //<p> - będą jako dzieci spana
    $('span').after('<p>Afterujemy tekst!</p>'); 

    // $('#naglowek-1').empty(); // znika tylko na stroni, widac go w consoli
    // $('#naglowek-1').remove(); // znika naglowek na stronie oraz w consoli

    $('#naglowek-1').css('background-color', 'yellow'); // nada kolor tla dla nagłówek-1
    $('#naglowek-1').css({color: 'red', 'text-decoration': 'underline'});

    //dla input nie działa innerHTML

    $('input#input-value').val('Łaaaaaał'); // ustawiamy wartość w input

    //są też klasy, dodawanie, usuwanie - prezentacja
}) */





//str 26 prezentacja
/* $(function() {

    $('#par-container').find('.paragraf').css('background-color', 'red'); // wyszukuje wszystkie p w divie i dokonuje zmian

}) */



//metoda each
$(function() { //each w nawiasach wpisujemy funkcje zwrotną

    $('p').each(function (index, element) {   //w jQuery piszemy na odwrot index, element
        // console.log($(this));
        
        console.log('Element ' + index + ':' + $(element).text()); //$(element) bo piszemy w jQuery

    });  

})

