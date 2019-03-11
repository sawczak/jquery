let prevSlide = $('.prev-slide');
let nextSlide = $('.next-slide');

let slideShow = $('.slide-show');
let singleSlide = $('.single-slide');
// console.log(singleSlide);
let singleSlideWidth = singleSlide.length * 100 + '%'; //slideShowWidth - rodzic = singleSlideWidth
let proportionSlide = 100 / singleSlide.length; // w tej zmiennej w przyapdku 4 kontenerów mamy 25%
let globalCounter = 0; //licznik, pozycja startowa każdego slajdera

//ustawiamy szerokośc dla całego kontenera z obrazkami
slideShow.css('width', singleSlideWidth);

//ustawiamy szerokośc dla poszczegolnego obrazka dla dziecka
// singleSlide.css({width: '100%'}); //to jest z błędem
singleSlide.css('width', proportionSlide + '%');

//ustawiamy margines dla obrazków, iterujemy po każdym obrazku, margin nam je rozbija na cała szerokość nie sa obrazki na sobie

// zrobiliśmy wcześniej źle bo każdy element ma 100%, a powinien miec 25% szerokosci przeglądarki
singleSlide.each(function(index, element) {
    $(element).css({'margin-left': index * proportionSlide + '%'});
});




// event klik na każdy button i consol log czy reaguje
//dodaje zmienne buttonów i click
//- a  + - są to odnośniki w lewo/prawo
$('.prev-slide').click(function() {
    // console.log('klika się left!');
    slide(globalCounter - 1); //lub --1
});


$('.next-slide').click(function() {
    // console.log('klika się right!');
    slide(globalCounter + 1); //chcemy żeby aktywny był w prawo, a w lewo nie
});



//przesuwanie // wyjście z funkcji = return (koniec działania), zaś z pętli break
//counter - parametr funkcji i podajemy go przy klikach
function slide(counter) {   //w tym momencie counter ma juz -1, przy kliknięciu
    // console.log(counter);
    if(counter < 0 || counter >= singleSlide.length) { //1 ma false, bo 1>=4, w dwóch przypadkach, więc lecimy na dół
        return;
    }

    //napis, szukamy wszystkich dzieci z klasą slide-caption, eq-metoda jQuery, która wyszukuje index
    //
    let slideCaption = slideShow.find('.slide-caption').eq(counter);
    slideCaption.fadeOut();


    //zmieniamy marginesy, pierwszy slajder -100 w lewo, kolejny -200 itd.
    let marginLeft = (counter * (-100)) + '%';
    // console.log(marginLeft);

//uruchomienie animacji - przesuwamy kontener, dlatego na rodzicu
    slideShow.animate({marginLeft: marginLeft}, 1000, function() {
        slideCaption.fadeIn();
        globalCounter = counter;
        
    });
    
    }

   

    //global counter trzeba przypisać do newGC
    
    // console.log(globalCounter, counter);



