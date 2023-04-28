function calcularEdad(event) {
  // Detener el comportamiento predeterminado del formulario
  event.preventDefault();

  // Obtener los valores de los campos de entrada
  const nombre = document.getElementById("nombre").value;
  const raza = document.getElementById("raza").value;
  const edad = document.getElementById("edad").value;

  // Calcular la edad equivalente en años humanos
  const edadHumana = edad * 7;

  // Agregar el resultado en el elemento div
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `La edad humana de tu mascota ${nombre} de raza ${raza} es de ${edadHumana} años`;
}
