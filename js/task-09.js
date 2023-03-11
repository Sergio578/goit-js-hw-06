function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Obtener el botón de cambio de color
const changeColorButton = document.querySelector('button.change-color');

// Obtener el elemento span que contiene el color actual
const colorValueElement = document.querySelector('span.color');

// Establecer el manejador de eventos para el botón de cambio de color
changeColorButton.addEventListener('click', function() {
  // Generar un color hexadecimal aleatorio
  const hexColor = getRandomHexColor();

  // Establecer el color de fondo del elemento body mediante estilo inline
  document.body.style.backgroundColor = hexColor;

  // Actualizar el valor del color en el elemento span
  colorValueElement.textContent = hexColor;
});
