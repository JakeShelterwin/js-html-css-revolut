// DESCRIZIONE:
// parto da buttare in pagina gli elementi grezzi (non mi interessa la grafica per ora);
// ricreo la funzionalità dei multi dropdown sulle varie voci di menù, su viewport largo;
// ricreo anche la funzionalità di menù hamburger a viewport più piccoli;
// cerco di far si che funzioni la questione di far comparire e scomparire ciò che mi serve sui viewport diversi (quindi come abbiam fatto questa mattina sulla correzione EX che era di ieri).

//GESTIONE COMPORTAMENTO AL CLICK
$(".menuLargo ul li").on({
click: function(){
    $(this).children().hide();
  },
mouseenter: function(){
    $(this).children().show();
  }
});

//metodo alternativo
// $(".menuLargo ul li").click(
//   function(){
//     $(this).children().show();
//   }
// );

// GESTIONE MENU AD AMBURGER
$('.fa-bars').click(
  function(){
    $('.hamburgerMenu').show();
  }
);

$('.fa-times').click(
  function(){
    $('.hamburgerMenu').hide();
  }
);
