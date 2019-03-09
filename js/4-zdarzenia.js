//trzy zdarzenia na jednym nagłówku
$('#naglowek-1').on({
    'click': function() {
        $(this).css('color', 'blue');
    },
    'mouseenter': function() {
        $(this).css('background-color', 'aqua');
    },
    'mouseleave': function() {
        $(this).css('background-color', 'inherit');
    }
});

//toggle aby odklikac napis