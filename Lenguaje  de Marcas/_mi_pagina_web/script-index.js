//Slider

const slider = document.querySelector(".slider");
const controls = document.querySelectorAll(".slider-control");

let currentSlide = 0;
let slideInterval;

function nextSlide() {
  if (currentSlide === 3) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slider.style.transform = `translateX(-${currentSlide * 25}%)`;
  updateControls();
}

function startSlide() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopSlide() {
  clearInterval(slideInterval);
}

function updateControls() {
  controls.forEach((control) => {
    const slideIndex = parseInt(control.dataset.slide);
    if (slideIndex === currentSlide) {
      control.classList.add("active");
    } else {
      control.classList.remove("active");
    }
  });
}

controls.forEach((control) => {
  control.addEventListener("click", () => {
    stopSlide();
    currentSlide = parseInt(control.dataset.slide);
    slider.style.transform = `translateX(-${currentSlide * 25}%)`;
    controls.forEach((c) => c.classList.remove("active"));
    control.classList.add("active");
    startSlide();
  });
  updateControls();
});

startSlide();

//Gif

// Variables para la posición del gif
var gifContainer = document.getElementById("gif-container");
var gif = document.getElementById("gif");
var initialGifX = gif.offsetLeft - gifContainer.offsetLeft;
var initialGifY = gif.offsetTop - gifContainer.offsetTop;
var gifX = initialGifX;
var gifY = initialGifY;
var cursorMoving = false;
var lastMouseX, lastMouseY;

// Función para actualizar la posición del gif
function updateGifPosition(event) {
  // Obtener el desplazamiento actual del cursor del ratón
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var mouseDeltaX = event.movementX;
  var mouseDeltaY = event.movementY;

  // Calcular la distancia entre el cursor del ratón y el gif
  var dx = mouseX - gifX - mouseDeltaX;
  var dy = mouseY - gifY - mouseDeltaY;
  var dist = Math.sqrt(dx * dx + dy * dy);

  // Calcular la velocidad del gif en función de la distancia
  var speed = Math.pow(1.0001, -dist) * 200;

  // Actualizar la posición del gif para acercarse al cursor del ratón
  gifX += dx / speed;
  gifY += dy / speed;

  // Establecer la posición del gif en el contenedor
  gif.style.left = gifX + "px";
  gif.style.top = gifY + "px";

  // Actualizar la variable booleana que indica si el cursor está en movimiento o no
  if (cursorMoving || mouseX !== lastMouseX || mouseY !== lastMouseY) {
    cursorMoving = true;
    lastMouseX = mouseX;
    lastMouseY = mouseY;
  } else {
    cursorMoving = false;
  }
}

// Registrar eventos para actualizar la posición del cursor del ratón y del gif
document.addEventListener("mousemove", updateGifPosition);

// Iniciar la animación
requestAnimationFrame(function () {
  // Volver a llamar a esta función en el siguiente cuadro de animación
  requestAnimationFrame(arguments.callee);

  // Actualizar la posición del gif en función de la posición actual del cursor del ratón
  if (cursorMoving) {
    updateGifPosition({
      clientX: lastMouseX,
      clientY: lastMouseY,
      movementX: 0,
      movementY: 0,
    });
  }
});
