$('#count-sum').click(function() {
// console.log('działa');
let suma = 0;

$('.salary').each(function() {
  // console.log($(this).text());

  suma += Number($(this).text());
  return suma;
});

// console.log(suma);
document.querySelector('#sum').innerHTML = suma;
});

