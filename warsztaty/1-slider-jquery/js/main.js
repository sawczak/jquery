let prevSlide = $('.prev-slide');
let nextSlide = $('.next-slide');

let slideShow = $('.slide-show');
let singleSlide = $('.single-slide');
// console.log(singleSlide);
let singleSlideWidth = singleSlide.length * 100 + '%';
let globalCounter = 0;

//ustawiamy szerokośc dla całego kontenera z obrazkami
slideShow.css('width', singleSlideWidth);

//ustawiamy szerokośc dla psozczegolnego obrazka
singleSlide.css({width: '100%'});

//ustawiamy margines dla obrazków
singleSlide.each(function(index, element) {
    $(this).css('margin-left', index * 100 + '%');
});


// event klik na każdy button i consol log czy reaguje
//dodaje zmienne buttonów i click

$('.prev-slide').click(function() {
    // console.log('klika się left!');
    slide(globalCounter - 1); //lub --1
});


$('.next-slide').click(function() {
    // console.log('klika się right!');
    slide(globalCounter + 1); //chcemy żeby aktywny był w prawo, a w lewo nie
});



//przesuwanie // wyjście z funkcji = return, zaś z pętli break
function slide(counter) {
    // console.log(counter);
    if(counter <= 0 || counter > singleSlide.length) {
        return;
    }

    //
    let slideCaption = slideShow.find('.slide-caption').eq(globalCounter);
    slideCaption.fadeOut();


    //zmieniamy marginesy, pierwszy slajder -100 w lewo, kolejny -200 itd.
    let marginLeft = (counter * (-100)) + '%';
    // console.log(marginLeft);


    slideShow.animate({marginLeft: marginLeft}, 1000, function() {
        slideCaption.fadeOut();
        globalCounter = counter;
        
    });
    
    }

   

    //global counter trzeba przypisać do newGC
    
    // console.log(globalCounter, counter);



