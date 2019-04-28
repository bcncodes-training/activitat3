// Quan l'usuari desplaça la plana a 20px o mes de la part de dalt del document, mostra el botó
window.onscroll = function() {scrollFunction()};
let backToTop = document.getElementById('backToTop');

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.display = "block";
   } else {            
    backToTop.style.display = "none";
  }
}
// Quan l'usuari fa click al botó, desplaça la plana fins al inici del document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



/*
function scrollFunction1() {
   var backToTop = setInterval(function () {
    if (!backToTop.style.opacity) {
        backToTop.style.opacity = 0.5;
    }
   if (backToTop.style.opacity <1) {
    backToTop.style.opacity += 0.1;
} else {
 //       clearInterval(fadeEffect);
    }
  }, 200);   
  for(var fadeElement of backToTop){
 
}
}
*/ 