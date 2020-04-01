// DESCRIZIONE:
// parto da buttare in pagina gli elementi grezzi (non mi interessa la grafica per ora);
// ricreo la funzionalità dei multi dropdown sulle varie voci di menù, su viewport largo;
// ricreo anche la funzionalità di menù hamburger a viewport più piccoli;
// cerco di far si che funzioni la questione di far comparire e scomparire ciò che mi serve sui viewport diversi (quindi come abbiam fatto questa mattina sulla correzione EX che era di ieri).

// questa variabile tiene in memoria l'ultimo menu aperto (quindi quello che è visibile)
var menuAperto;

//GESTIONE COMPORTAMENTO MENU A SCOMPARSA
$(".menuLargo>ul>li").on({
mouseenter: function(){
    if (menuAperto){
      menuAperto.hide();
    }
    menuAperto = $(this).children();
    $(this).children().show();
  }
});

// chiudo il sottomenu se clicco da qualche parte e è aperto
$("main").click(
  function(){
    $(".menuLargo>ul>li .sottomenuNascosto").hide();
  }
);

//Altro modo: nascondili tutti e mostra solo quello in cui mi trovo
// $(".nav-item").mouseenter(
//  function(){
//  $(".nav-item").children("ul").hide();
//  $(this).children("ul").show();
//  }
// );

//metodo alternativo
// $(".menuLargo ul li").click(
//   function(){
//     $(this).children().show();
//   }
// );

// GESTIONE MENU AD HAMBURGER (scompare grazie a css oltre una certa larghezza se è aperto)
$('.fa-bars').click(
  function(){
    $('.hamburgerMenu').attr('id', 'mostra');
  }
);

$('.fa-times').click(
  function(){
    $('.hamburgerMenu').attr('id', 'nulla');
  }
);
