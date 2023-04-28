// Obtiene el botón o enlace
var btnArriba = document.getElementById("btn-arriba");

// Agrega un evento de clic al botón o enlace
btnArriba.addEventListener("click", function (event) {
  // Previene el comportamiento por defecto del enlace
  event.preventDefault();

  // Oculta el texto
  texto.style.display = "none";

  // Devuelve el estado del botón "mostrar menos" a "mostrar más"
  boton.innerHTML = "Mostrar más";

  // Actualiza el estado del botón "mostrar menos"
  estado = false;

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

var boton = document.getElementById("boton-mostrar");
var texto = document.getElementById("texto-oculto");
var estado = false;

boton.addEventListener("click", function () {
  if (estado) {
    texto.style.display = "none";
    boton.innerHTML = "Mostrar más";
    estado = false;
    boton.scrollIntoView({ behavior: "smooth" });
  } else {
    texto.style.display = "block";
    boton.innerHTML = "Mostrar menos";
    estado = true;
    texto.scrollIntoView({ behavior: "smooth" });
  }
});