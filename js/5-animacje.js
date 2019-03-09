/* $('#naglowek-1').hide(3000); // nadawana jest szerokości i wysokość
$('#naglowek-1').show(3000); */

/* $('#naglowek-1').fadeOut(3000);
$('#naglowek-1').fadeIn(3000); */

/* $('#naglowek-1').slideUp(3000); //nadawana jest tylko szerokość
$('#naglowek-1').slideDown(3000);

 */

//animacja nagłówka

/* let naglowek2 = $('#naglowek-2'); 

function customAnimate() {
    console.log('koniec 1 animacji. Za chwile 2 animacja!');


}


naglowek2.animate({
    fontSize: '4em',
    marginLeft: '300px',
    bolor: 'blue'

}, 2000, customAnimate);

 */



let naglowek2 = $('#naglowek-2'); 

function customAnimate2() {
    console.log('koniec I animacji. Za chwile II animacja!');

    naglowek2.animate({
        fontSize: '2em',
        marginLeft: '0px',
    
    }, 2000, customAnimate1); // musimy wywołac następną funkcję, dlatego mamy 1, a nie 2

};

function customAnimate1() {
    console.log('koniec II animacji. Za chwile I animacja!');

    naglowek2.animate({
    fontSize: '4em',
    marginLeft: '300px',

}, 2000, customAnimate2);

}

customAnimate1();
 

//jaki skrypt odpowiada za to co zmienia kolor w jquery - zadanie 