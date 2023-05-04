// Obtiene el botón o enlace
var btnArriba = document.getElementById("btn-arriba");

// Agrega un evento de clic al botón o enlace
btnArriba.addEventListener("click", function (event) {
  // Previene el comportamiento por defecto del enlace
  event.preventDefault();

  // Desplaza suavemente hacia arriba de la página
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Agrega un evento de desplazamiento a la ventana
window.addEventListener("scroll", function () {
  // Obtiene la posición actual del usuario
  var scrollY = window.scrollY;

  // Obtiene la altura de la ventana
  var windowHeight = window.innerHeight;
});

